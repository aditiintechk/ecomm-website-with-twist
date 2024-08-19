import arata from '../../public/images/arata.jpg'
import daichi from '../../public/images/daichi.jpg'
import eren from '../../public/images/eren.jpg'
import gojo from '../../public/images/gojo.jpg'
import goku from '../../public/images/goku.jpg'
import hinata from '../../public/images/hinata.jpg'
import ichigo from '../../public/images/ichigo.png'
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
import saitama from '../../public/images/saitama.png'
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
		hair: 'Oops..',
		price: 8.5,
		image: saitama,
		isClanMember: false,
	},
	{
		name: 'Goku',
		anime: 'Dragon Ball',
		hair: 'Black',
		price: 12.2,
		image: goku,
		isClanMember: false,
	},
	{
		name: 'Ichigo Kurosaki',
		anime: 'Bleach',
		hair: 'Orange',
		price: 6.8,
		image: ichigo,
		isClanMember: false,
	},
	{
		name: 'Gojo Satoru',
		anime: 'Jujutsu Kaisen',
		hair: 'White',
		price: 9.6,
		image: gojo,
		isClanMember: false,
	},
	{
		name: 'Naruto Uzumaki',
		anime: 'Naruto',
		hair: 'Blonde',
		price: 11.3,
		image: naruto,
		isClanMember: false,
	},
	{
		name: 'Sasuke Uchiha',
		anime: 'Naruto',
		hair: 'Black',
		price: 7.9,
		image: sasuke,
		isClanMember: false,
	},
	{
		name: 'Mob (Shigeo)',
		anime: 'Mob Psycho 100',
		hair: 'Black',
		price: 13.1,
		image: mob,
		isClanMember: false,
	},
	{
		name: 'Tanjiro Kamado',
		anime: 'Demon Slayer',
		hair: 'Black with Red Tips',
		price: 8.7,
		image: tanjiro,
		isClanMember: false,
	},
	{
		name: 'Nezuko Kamado',
		anime: 'Demon Slayer',
		hair: 'Black with Orange Tips',
		price: 10.5,
		image: nezuko,
		isClanMember: false,
	},
	{
		name: 'Eren Yeager',
		anime: 'Attack on Titan',
		hair: 'Brown',
		price: 5.6,
		image: eren,
		isClanMember: false,
	},
	{
		name: 'Mikasa Ackerman',
		anime: 'Attack on Titan',
		hair: 'Black',
		price: 14.8,
		image: mikasa,
		isClanMember: false,
	},
	{
		name: 'Yato (Yatogami)',
		anime: 'Noragami',
		hair: 'Dark Blue',
		price: 7.3,
		image: yato,
		isClanMember: false,
	},
	{
		name: 'Hinata Shoyo',
		anime: 'Haikyuu!!',
		hair: 'Orange',
		price: 9.9,
		image: hinata,
		isClanMember: false,
	},
	{
		name: 'Oikawa Toru',
		anime: 'Haikyuu!!',
		hair: 'Brown',
		price: 12.0,
		image: oikawa,
		isClanMember: false,
	},
	{
		name: 'Kuroo Tetsuro',
		anime: 'Haikyuu!!',
		hair: 'Black',
		price: 6.4,
		image: kuro,
		isClanMember: false,
	},
	{
		name: 'Daichi Sawamura',
		anime: 'Haikyuu!!',
		hair: 'Brown',
		price: 13.7,
		image: daichi,
		isClanMember: false,
	},
	{
		name: 'Levi Ackerman',
		anime: 'Attack on Titan',
		hair: 'Black',
		price: 8.2,
		image: levi,
		isClanMember: false,
	},
	{
		name: 'Sasha Blouse',
		anime: 'Attack on Titan',
		hair: 'Brown',
		price: 11.4,
		image: sasha,
		isClanMember: false,
	},
	{
		name: 'Kaneki Ken',
		anime: 'Tokyo Ghoul',
		hair: 'Black (Later White)',
		price: 6.1,
		image: kaneki,
		isClanMember: false,
	},
	{
		name: 'Violet Evergarden',
		anime: 'Violet Evergarden',
		hair: 'Blonde',
		price: 10.2,
		image: violet,
		isClanMember: false,
	},
	{
		name: 'Ishida Shoya',
		anime: 'A Silent Voice',
		hair: 'Brown',
		price: 7.8,
		image: ishida,
		isClanMember: false,
	},
	{
		name: 'Shoko Nishimiya',
		anime: 'A Silent Voice',
		hair: 'Light Brown',
		price: 14.0,
		image: nishimiya,
		isClanMember: false,
	},
	{
		name: 'Arata Kaizaki',
		anime: 'ReLIFE',
		hair: 'Black',
		price: 5.3,
		image: arata,
		isClanMember: false,
	},
	{
		name: 'Monkey D. Luffy',
		anime: 'One Piece',
		hair: 'Black',
		price: 9.7,
		image: monkey,
		isClanMember: false,
	},
	{
		name: 'Roronoa Zoro',
		anime: 'One Piece',
		hair: 'Green',
		price: 12.9,
		image: zoro,
		isClanMember: false,
	},
]

export default characters
