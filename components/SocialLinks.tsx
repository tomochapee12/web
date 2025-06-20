export default function SocialLinks() {
  const social = {
    x: "https://x.com/tomochann12",
    mail: "mailto:tomoch123456@gmail.com",
  };

  return (
    <div className="widget">
      <h3>Links</h3>
      <ul>
        <li style={{ padding: '0.5rem 0' }}><a href={social.x} target="_blank">X (Twitter)</a></li>
        <li style={{ padding: '0.5rem 0' }}><a href={social.mail}>Mail</a></li>
      </ul>
    </div>
  );
}