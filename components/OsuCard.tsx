export default function OsuCard() {
  return (
    <div className="widget">
      <h3>osu!</h3>
      <img
        alt="osu stats"
        src="https://osu-sig.vercel.app/card?user=tomochapee&mode=std&lang=en&blur=6&round_avatar=true&animation=true&hue=255"
        style={{ maxWidth: '100%', borderRadius: '8px' }}
      />
    </div>
  );
}