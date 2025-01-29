import Nav from "./Nav";

export default function Header({setSelectedScene}) {
  return(
    <header>
      <h1>シーン別おすすめ曲紹介</h1>
      <Nav setSelectedScene={setSelectedScene} />
    </header>
  );
}