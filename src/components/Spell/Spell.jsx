function Spell({ name, incantation, effect, type }) {
    return (
        <div className="spell">
            <h2>{name ?? ""} {(name && incantation) && " - "} {incantation ?? ""}</h2>
            <h4>{effect ?? ""}</h4>
        </div>
    );
}
export default Spell;