import "../styles/SectionOne.css";

export const SectionOne = () => {
  
  return (
    <section className="section-one-container">
      <div className="content-01">
        <h1>Bienvenidos a esta <span>super pagina wev</span></h1>
        <h2>Esto es un subtitulo</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum molestias odio iure enim eos. Necessitatibus adipisci aliquam laboriosam, asperiores totam dolor fugiat possimus dignissimos quam rem, explicabo molestiae suscipit quibusdam.</p>
      </div>
     
      <div className="content-02">
        <img src="../src/assets/img-section-02.png" alt="" />
      </div>
    </section>
  );
};
