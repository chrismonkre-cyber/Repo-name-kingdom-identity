export default function PageBackground({ desktopImg, mobileImg }) {
  return (
    <>
      <div
        className="fixed inset-0 -z-10 hidden md:block bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${desktopImg})` }}
      />
      <div
        className="fixed inset-0 -z-10 md:hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mobileImg})` }}
      />
      <div className="fixed inset-0 -z-10 bg-black/20" />
    </>
  );
}