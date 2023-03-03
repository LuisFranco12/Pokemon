import { AboutContainer } from "./About.styled";
const About = () => {
    return ( 
        <AboutContainer>
            <div className="centered-content">
                <div className="img-container">
                    <a className="image-link" href="https://www.pokemon.com/us">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' alt='pokemon logo'/>
                    </a>
                </div>
                <div className="about-text">
                    <h1>About Pokemon</h1>
                    <p className="description">
                        Pokémon is a multimedia franchise that first began in 1996 as a video game developed by <a href="https://www.gamefreak.co.jp/town/30th/en/"> Game Freak </a> for the Nintendo Game Boy. The franchise has since expanded to include a wide range of media, including anime, manga, trading cards, and toys.

                        The central concept of Pokémon involves capturing and training various creatures known as "Pokémon" to battle against other trainers. Each Pokémon has its own unique set of abilities and attributes, which can be used to strategically defeat opponents in battle. As players progress through the games and defeat other trainers, they earn experience points that can be used to level up their Pokémon and unlock new abilities.

                        In addition to the main series of games, which include titles such as Pokémon Red and Blue, the franchise has also expanded to include a range of spin-off games, such as Pokémon Snap, Pokémon Mystery Dungeon, and Pokémon Go. The Pokémon anime series, which has been on the air since 1997, follows the adventures of a young trainer named Ash Ketchum and his Pokémon as they travel through various regions and compete in battles against other trainers.

                        Overall, the Pokémon franchise has become a beloved and enduring cultural phenomenon, inspiring countless fans around the world and spawning a vast array of merchandise and spin-off media.
                    </p>
                </div>
            </div>
        </AboutContainer>
     );
}
 
export default About;