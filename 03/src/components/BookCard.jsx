export default function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  return (
    <div style={{
      border: "2px solid black",borderRadius: "10px",padding: "19px",margin: "10px",width: "250px"
    }}>
      <h2>{titre}</h2>
      <p>{auteur}</p>
      <p>Statut : {estDisponible ? "🟢 Disponible" : "🔴 Emprunté"}</p>
      <button onClick={onClickEmprunt}>
        {estDisponible ? "Emprunter" : "Rendre"}
      </button>
    </div>
  )
}