import React from 'react';
import './HomelabStatusCard.css';
import proxmoxIcon from '../assets/icons/proxmox.svg';
import dockerIcon from '../assets/icons/docker.svg';
import cloudflareIcon from '../assets/icons/cloudflare.svg';
import grafanaIcon from '../assets/icons/grafana.svg';
import folderIcon from '../assets/icons/folder.svg';
import unifiIcon from '../assets/icons/unifi.svg';

const stackItems = [
  { name: 'Proxmox', icon: proxmoxIcon },
  { name: 'Docker', icon: dockerIcon },
  { name: 'Cloudflare', icon: cloudflareIcon },
  { name: 'UniFi', icon: unifiIcon },
  { name: 'Grafana', icon: grafanaIcon },
];

const statusItems = [
  { label: 'Proxmox node', value: 'noah', detail: 'single-node lab', tone: 'neutral' },
  { label: 'Monitoring', value: '18/18', detail: 'Prometheus targets up', tone: 'good' },
  { label: 'Public routes', value: '7', detail: 'Cloudflare protected', tone: 'good' },
];

const serviceGroups = [
  { name: 'Network', detail: 'Tunnel / DNS / UniFi' },
  { name: 'Ops', detail: 'Grafana / Prometheus' },
  { name: 'Apps', detail: 'Blog / Bots / Yamtrack' },
  { name: 'Data', detail: 'Nextcloud / storage' },
];

const HomelabStatusCard = () => (
  <article className="homelab-status-card">
    <div className="homelab-hero">
      <div className="homelab-copy">
        <div className="homelab-title-row">
          <span className="homelab-title-icon-wrapper">
            <img src={folderIcon} alt="" className="homelab-title-icon" aria-hidden="true" />
          </span>
          <p className="homelab-kicker">Homelab / Status</p>
        </div>
        <h2>A compact homelab, actively maintained.</h2>
        <p>
          Proxmoxを中心に、DNS、監視、アプリ公開、データ系ワークロードを分けて運用しています。
        </p>
        <div className="homelab-stack" aria-label="Homelab stack">
          {stackItems.map((item) => (
            <span key={item.name}>
              <img src={item.icon} alt="" aria-hidden="true" />
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="homelab-topology" aria-label="Homelab topology diagram">
      <div className="topology-row topology-entry">
        <div className="topology-node node-cloud">Internet</div>
        <div className="topology-link"></div>
        <div className="topology-node node-cloudflare">Cloudflare Tunnel / Access</div>
      </div>

      <div className="topology-spine"></div>

      <div className="topology-row topology-core">
        <div className="topology-node">MikroTik Edge</div>
        <div className="topology-node">AdGuard DNS</div>
        <div className="topology-node node-proxmox">Proxmox noah</div>
      </div>

      <div className="topology-branches">
        {serviceGroups.map((group) => (
          <div key={group.name} className="topology-service">
            <strong>{group.name}</strong>
            <span>{group.detail}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="homelab-status-grid">
      {statusItems.map((item) => (
        <div key={item.label} className="homelab-status-item">
          <span className={`homelab-status-dot ${item.tone}`}></span>
          <p>{item.label}</p>
          <strong>{item.value}</strong>
          <small>{item.detail}</small>
        </div>
      ))}
    </div>
  </article>
);

export default HomelabStatusCard;
