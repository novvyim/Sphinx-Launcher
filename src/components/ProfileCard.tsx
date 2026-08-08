const AVATAR_URL =
  "https://images-ext-1.discordapp.net/external/0ah-3ztNTSReoYvIdX-jOw-xwESVBwhwOgN6gnHyCJc/%3Fsize%3D512/https/cdn.discordapp.com/avatars/967891235668897843/aed0d97b280b8082a2ce6fc0d9450f37.png?format=webp&quality=lossless";

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-avatar">
        <img src={AVATAR_URL} alt="Avatar" />
      </div>
      <div className="profile-info">
        <div className="profile-name">! Ndhuwwe</div>
        <div className="profile-status">Разработчик</div>
      </div>
    </div>
  );
}
