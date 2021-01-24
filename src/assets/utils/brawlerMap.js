const hashableBrawlers = [
  "SHELLY=>https://static.wikia.nocookie.net/brawlstars/images/e/e5/Shelly_Portrait.png", 
  "COLT=>https://static.wikia.nocookie.net/brawlstars/images/0/08/Colt_Portrait.png", 
  "BULL=>https://static.wikia.nocookie.net/brawlstars/images/4/4a/Bull_Portrait.png", 
  "BROCK=>https://static.wikia.nocookie.net/brawlstars/images/f/f9/Brock_Portrait.png", 
  "RICO=>https://static.wikia.nocookie.net/brawlstars/images/e/e1/Rico_Portrait.png", 
  "SPIKE=>https://static.wikia.nocookie.net/brawlstars/images/2/22/Spike_Portrait.png", 
  "BARLEY=>https://static.wikia.nocookie.net/brawlstars/images/a/a1/Barley_Portrait.png", 
  "JESSIE=>https://static.wikia.nocookie.net/brawlstars/images/4/4e/Jessie_Portrait.png", 
  "NITA=>https://static.wikia.nocookie.net/brawlstars/images/9/9f/Nita_Portrait.png", 
  "DYNAMIKE=>https://static.wikia.nocookie.net/brawlstars/images/6/64/Dynamike_Portrait.png", 
  "EL PRIMO=>https://static.wikia.nocookie.net/brawlstars/images/c/c5/El_Primo_Portrait.png", 
  "MORTIS=>https://static.wikia.nocookie.net/brawlstars/images/b/b4/Mortis_Portrait.png", 
  "CROW=>https://static.wikia.nocookie.net/brawlstars/images/6/6f/Crow_Portrait.png", 
  "POCO=>https://static.wikia.nocookie.net/brawlstars/images/5/59/Poco_Portrait.png", 
  "BO=>https://static.wikia.nocookie.net/brawlstars/images/3/30/Bo_Portrait.png", 
  "PIPER=>https://static.wikia.nocookie.net/brawlstars/images/f/f0/Piper_Portrait.png", 
  "PAM=>https://static.wikia.nocookie.net/brawlstars/images/d/dc/Pam_Portrait.png", 
  "TARA=>https://static.wikia.nocookie.net/brawlstars/images/4/49/Tara_Portrait.png", 
  "DARRYL=>https://static.wikia.nocookie.net/brawlstars/images/4/46/Darryl_Portrait.png", 
  "PENNY=>https://static.wikia.nocookie.net/brawlstars/images/8/8d/Penny_Portrait.png", 
  "FRANK=>https://static.wikia.nocookie.net/brawlstars/images/6/63/Frank_Portrait.png", 
  "GENE=>https://static.wikia.nocookie.net/brawlstars/images/7/7c/Gene_Portrait.png", 
  "TICK=>https://static.wikia.nocookie.net/brawlstars/images/7/72/Tick_Portrait.png", 
  "LEON=>https://static.wikia.nocookie.net/brawlstars/images/4/48/Leon_Portrait.png", 
  "ROSA=>https://static.wikia.nocookie.net/brawlstars/images/9/94/Rosa_Portrait.png", 
  "CARL=>https://static.wikia.nocookie.net/brawlstars/images/1/19/Carl_Portrait.png", 
  "BIBI=>https://static.wikia.nocookie.net/brawlstars/images/c/c2/Bibi_Portrait.png", 
  "8-BIT=>https://static.wikia.nocookie.net/brawlstars/images/f/f0/8-BIT_Portrait.png", "SANDY=>https://static.wikia.nocookie.net/brawlstars/images/e/e3/Sandy_Portrait.png", 
  "BEA=>https://static.wikia.nocookie.net/brawlstars/images/a/ae/Bea_Portrait.png", 
  "EMZ=>https://static.wikia.nocookie.net/brawlstars/images/a/a4/Emz_Portrait.png", 
  "MR. P=>https://static.wikia.nocookie.net/brawlstars/images/0/08/Mr._P_Portrait.png", 
  "MAX=>https://static.wikia.nocookie.net/brawlstars/images/8/83/Max_Portrait.png", 
  "JACKY=>https://static.wikia.nocookie.net/brawlstars/images/0/03/Jacky_Portrait.png", 
  "GALE=>https://static.wikia.nocookie.net/brawlstars/images/3/3f/Gale_Portrait.png", 
  "NANI=>https://static.wikia.nocookie.net/brawlstars/images/c/c0/Nani_Portrait.png", 
  "SPROUT=>https://static.wikia.nocookie.net/brawlstars/images/4/4d/Sprout_Portrait.png", 
  "SURGE=>https://static.wikia.nocookie.net/brawlstars/images/2/27/Surge_Portrait.png", 
  "COLETTE=>https://static.wikia.nocookie.net/brawlstars/images/e/e8/Colette_Portrait.png", 
  "AMBER=>https://static.wikia.nocookie.net/brawlstars/images/9/96/Amber_Portrait.png", 
  "LOU=>https://static.wikia.nocookie.net/brawlstars/images/0/0b/Lou_Portrait.png", 
  "BYRON=>https://static.wikia.nocookie.net/brawlstars/images/f/f6/Byron_Portrait.png", 
  "EDGAR=>https://static.wikia.nocookie.net/brawlstars/images/b/b4/Edgar_Portrait.png"]

export default function brawlersHashList() {
  const hash = new Map();
  hashableBrawlers.forEach(brawler => {
    const [key, file] = brawler.split('=>')
    hash.set(key, file)
  })
  return hash
}