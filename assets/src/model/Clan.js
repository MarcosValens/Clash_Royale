export function Clan(tag, name, nMember, chestLvl, score, country) {
    this.name = name;
    this.tag = tag;
    this.nMember = nMember;
    this.chestLvl = chestLvl;
    this.score = score;
    this.country = country || "Sin País";
}
