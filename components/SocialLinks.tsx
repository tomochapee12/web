export default function SocialLinks() {
  const social = {
    x: "https://x.com/your_x_handle", // あなたのXのURL
    discord: "https://discord.com/users/your_user_id", // あなたのDiscord ID
    mail: "mailto:your_email@example.com", // あなたのメールアドレス
  };

  return (
    <div className="widget">
      <h3>Links</h3>
      <ul>
        <li style={{ padding: '0.5rem 0' }}><a href={social.x} target="_blank">X (Twitter)</a></li>
        <li style={{ padding: '0.5rem 0' }}><a href={social.discord} target="_blank">Discord</a></li>
        <li style={{ padding: '0.5rem 0' }}><a href={social.mail}>Mail</a></li>
      </ul>
    </div>
  );
}