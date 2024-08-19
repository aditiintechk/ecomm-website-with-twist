import arata from '../../public/images/arata.jpg'
import daichi from '../../public/images/daichi.jpg'
import eren from '../../public/images/eren.jpg'
import gojo from '../../public/images/gojo.jpg'
import goku from '../../public/images/goku.jpg'
import hinata from '../../public/images/hinata.jpg'
import ichigo from '../../public/images/ichigo.jpg'
import ishida from '../../public/images/ishida.jpg'
import kaneki from '../../public/images/kaneki.jpg'
import kuro from '../../public/images/kuro.jpg'
import levi from '../../public/images/levi.jpg'
import mikasa from '../../public/images/mikasa.jpg'
import mob from '../../public/images/mob.jpg'
import monkey from '../../public/images/monkey.jpg'
import naruto from '../../public/images/naruto.jpg'
import nezuko from '../../public/images/nezuko.jpg'
import nishimiya from '../../public/images/nishimiya.jpg'
import oikawa from '../../public/images/oikawa.jpg'
import saitama from '../../public/images/saitama.jpg'
import sasha from '../../public/images/sasha.jpg'
import sasuke from '../../public/images/sasuke.jpg'
import tanjiro from '../../public/images/tanjiro.jpg'
import violet from '../../public/images/violet.jpg'
import yato from '../../public/images/yato.jpg'
import zoro from '../../public/images/zoro.jpg'

const characters = [
	{
		name: 'Saitama',
		anime: 'One Punch Man',
		quote: "I'm just a guy who's a hero for fun.",
		hair: 'oops',
		price: 8.5,
		image: saitama,
	},
	{
		name: 'Goku',
		anime: 'Dragon Ball',
		quote: 'I am the hope of the universe. I am the answer to all living things that cry out for peace.',
		hair: 'Black',
		price: 12.2,
		image: goku,
	},
	{
		name: 'Ichigo Kurosaki',
		anime: 'Bleach',
		quote: 'If you give me wings, I will soar for you, even if this whole land sinks down to the water.',
		hair: 'Orange',
		price: 6.8,
		image: ichigo,
	},
	{
		name: 'Gojo Satoru',
		anime: 'Jujutsu Kaisen',
		quote: 'Throughout Heaven and Earth, I alone am the honored one.',
		hair: 'White',
		price: 9.6,
		image: gojo,
	},
	{
		name: 'Naruto Uzumaki',
		anime: 'Naruto',
		quote: "I never go back on my word. That's my nindo: my ninja way.",
		hair: 'Blonde',
		price: 11.3,
		image: naruto,
	},
	{
		name: 'Sasuke Uchiha',
		anime: 'Naruto',
		quote: 'I have long since closed my eyes… My only goal is in the darkness.',
		hair: 'Black',
		price: 7.9,
		image: sasuke,
	},
	{
		name: 'Mob (Shigeo Kageyama)',
		anime: 'Mob Psycho 100',
		quote: "If you want to be normal, don't stand out.",
		hair: 'Black',
		price: 13.1,
		image: mob,
	},
	{
		name: 'Tanjiro Kamado',
		anime: 'Demon Slayer',
		quote: "I'll never forgive myself if I let someone else die while I'm not doing anything.",
		hair: 'Black with Red Tips',
		price: 8.7,
		image: tanjiro,
	},
	{
		name: 'Nezuko Kamado',
		anime: 'Demon Slayer',
		quote: 'Mmm! Mmm! Mmm!',
		hair: 'Black with Orange Tips',
		price: 10.5,
		image: nezuko,
	},
	{
		name: 'Eren Yeager',
		anime: 'Attack on Titan',
		quote: "I'll destroy them! Every last one of those animals that's on this earth!",
		hair: 'Brown',
		price: 5.6,
		image: eren,
	},
	{
		name: 'Mikasa Ackerman',
		anime: 'Attack on Titan',
		quote: 'This world is cruel. It is also very beautiful.',
		hair: 'Black',
		price: 14.8,
		image: mikasa,
	},
	{
		name: 'Yato (Yatogami)',
		anime: 'Noragami',
		quote: "I'm Yato. I don't exist. Never did.",
		hair: 'Dark Blue',
		price: 7.3,
		image: yato,
	},
	{
		name: 'Hinata Shoyo',
		anime: 'Haikyuu!!',
		quote: 'I may be small, but I can jump!',
		hair: 'Orange',
		price: 9.9,
		image: hinata,
	},
	{
		name: 'Oikawa Toru',
		anime: 'Haikyuu!!',
		quote: 'Talent is something you make bloom, instinct is something you polish.',
		hair: 'Brown',
		price: 12.0,
		image: oikawa,
	},
	{
		name: 'Kuroo Tetsuro',
		anime: 'Haikyuu!!',
		quote: 'The only ones who will remain on the court are the strong.',
		hair: 'Black',
		price: 6.4,
		image: kuro,
	},
	{
		name: 'Daichi Sawamura',
		anime: 'Haikyuu!!',
		quote: "You don't win alone. That's just how it is.",
		hair: 'Brown',
		price: 13.7,
		image: daichi,
	},
	{
		name: 'Levi Ackerman',
		anime: 'Attack on Titan',
		quote: "The only thing we're allowed to do is to believe that we won't regret the choice we made.",
		hair: 'Black',
		price: 8.2,
		image: levi,
	},
	{
		name: 'Sasha Blouse',
		anime: 'Attack on Titan',
		quote: "Meat! It's meat!",
		hair: 'Brown',
		price: 11.4,
		image: sasha,
	},
	{
		name: 'Kaneki Ken',
		anime: 'Tokyo Ghoul',
		quote: "I'm not the protagonist of a novel or anything... I'm just a college student who likes to read, like you could find anywhere. But... if, for argument's sake, you were to write a story with me in the lead role, it would certainly be... a tragedy.",
		hair: 'Black (Later White)',
		price: 6.1,
		image: kaneki,
	},
	{
		name: 'Violet Evergarden',
		anime: 'Violet Evergarden',
		quote: "I want to know what 'I love you' means.",
		hair: 'Blonde',
		price: 10.2,
		image: violet,
	},
	{
		name: 'Ishida Shoya',
		anime: 'A Silent Voice',
		quote: "I'm going to change myself. I won't hurt anyone else.",
		hair: 'Brown',
		price: 7.8,
		image: ishida,
	},
	{
		name: 'Shoko Nishimiya',
		anime: 'A Silent Voice',
		quote: 'Can we be friends?',
		hair: 'Light Brown',
		price: 14.0,
		image: nishimiya,
	},
	{
		name: 'Arata Kaizaki',
		anime: 'ReLIFE',
		quote: "Don't live your life making up excuses. The one making your choices is yourself!",
		hair: 'Black',
		price: 5.3,
		image: arata,
	},
	{
		name: 'Monkey D. Luffy',
		anime: 'One Piece',
		quote: "I'm going to be the Pirate King!",
		hair: 'Black',
		price: 9.7,
		image: monkey,
	},
	{
		name: 'Roronoa Zoro',
		anime: 'One Piece',
		quote: "If I die here, then I'm a man that could only make it this far.",
		hair: 'Green',
		price: 12.9,
		image: zoro,
	},
]

export default characters
