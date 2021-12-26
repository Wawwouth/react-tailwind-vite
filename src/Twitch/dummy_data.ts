export type liveChannel = {
  streamer: string;
  category: string;
  title: string;
  viewers: string;
  profilePicture?: string
}

export type TwitchDataType = {
  following: liveChannel[];
}

export const data: TwitchDataType = {
  following: [
    {streamer: 'Chess', category: 'Chess', viewers: '21,2 k', title: 'FIDE World Rapid & Blitz Championships 2021'},
    {streamer: 'Etoiles', category: 'Mario Kart 8', viewers: '8,1 k', title: 'Tournoi Mario Kart du DIMANCHE // Objectif 250'},
    {streamer: 'BlitzStream', category: 'Chess', viewers: '5,5 k', title: 'Championnat du Monde de Rapide on suit MVL et Firouzja'},
    {streamer: 'Waolol1', category: 'League of Legends', viewers: '5,4 k', title: 'KC WAO !!!!! soloQ mon frere duoQ Toucouille'},
    {streamer: 'rhobalas_lol', category: `I'm Only Sleeping`, viewers: '2,4 k', title: 'SUBATHON DE NOEL !subathon :giveaway !nordvpn'},
    {streamer: 'SolaryFortnite', category: 'Fortnite', viewers: '1,2 k', title: 'BlastR - MEILLEUR TRIO EU GRIND ARENE'},
    {streamer: 'zacknani', category: 'Football Manager 2022', viewers: '1,2 k', title: 'Zack - Bonjour bonjour !'},
  ]
}