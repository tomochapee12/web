import React from 'react';
import './UsesCard.css';
import toolsStackIcon from '../assets/icons/tools-stack.svg';
import vscodeIcon from '../assets/icons/vscode.svg';
import vimIcon from '../assets/icons/vim.svg';
import reactIcon from '../assets/icons/react.svg';
import viteIcon from '../assets/icons/vite.svg';
import nodeIcon from '../assets/icons/nodejs.svg';
import proxmoxIcon from '../assets/icons/proxmox.svg';
import dockerIcon from '../assets/icons/docker.svg';
import cloudflareIcon from '../assets/icons/cloudflare.svg';
import grafanaIcon from '../assets/icons/grafana.svg';

const toolGroups = [
  {
    label: 'Editor',
    tools: [
      { name: 'VS Code', icon: vscodeIcon },
      { name: 'Vim', icon: vimIcon },
    ],
  },
  {
    label: 'Frontend',
    tools: [
      { name: 'React', icon: reactIcon },
      { name: 'Vite', icon: viteIcon },
      { name: 'Node.js', icon: nodeIcon },
    ],
  },
  {
    label: 'Server',
    tools: [
      { name: 'Proxmox', icon: proxmoxIcon },
      { name: 'Docker', icon: dockerIcon },
    ],
  },
  {
    label: 'Ops',
    tools: [
      { name: 'Cloudflare', icon: cloudflareIcon },
      { name: 'Grafana', icon: grafanaIcon },
    ],
  },
];

const UsesCard = () => (
  <article className="uses-card">
    <div className="uses-card-header">
      <div className="uses-icon-wrapper">
        <img src={toolsStackIcon} alt="" className="uses-title-icon" aria-hidden="true" />
      </div>
      <div className="uses-title-group">
        <p className="uses-kicker">Stack</p>
        <h2>Tools I Use</h2>
      </div>
    </div>
    <div className="uses-matrix">
      {toolGroups.map((item) => (
        <div key={item.label} className="uses-matrix-item">
          <span>{item.label}</span>
          <div className="uses-tool-list">
            {item.tools.map((tool) => (
              <div key={tool.name} className="uses-tool">
                <img src={tool.icon} alt="" className="uses-tool-icon" aria-hidden="true" />
                <strong>{tool.name}</strong>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </article>
);

export default UsesCard;
