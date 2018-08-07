import assert from 'assert';
import sets__ = require('./data/AllSets.json');

const SETS = (sets__ as SetsJson);

enum MtgaSet {
	AER = 'AER',
	AKH = 'AKH',
	DOM = 'DOM',
	HOU = 'HOU',
	KLD = 'KLD',
	M19 = 'M19',
	RIX = 'RIX',
	W17 = 'W17',
	XLN = 'XLN',
}

type Card = {
	name: string,
	number: number
};

type SetObj = {
	name: string,
	cards: Card[]
};

type SetsJson = {
	[set in MtgaSet]: SetObj
};

type CardMap = { number: number, id: number, name: string };

const KNOWN_IDS: Map<MtgaSet, CardMap> = new Map([
	[MtgaSet.AER, {number: 1, id: 64213, name: 'Aerial Modification'}],
	[MtgaSet.AKH, {number: 1, id: 64801, name: 'Angel of Sanctions'}],
	[MtgaSet.DOM, {number: 1, id: 67106, name: 'Karn, Scion of Urza'}],
	[MtgaSet.HOU, {number: 1, id: 65479, name: 'Act of Heroism'}],
	[MtgaSet.KLD, {number: 1, id: 63641, name: 'Acrobatic Maneuver'}],
	[MtgaSet.M19, {number: 1, id: 67682, name: 'Aegis of the Heavens'}],
	[MtgaSet.RIX, {number: 1, id: 66619, name: 'Baffling End'}],
	[MtgaSet.W17, {number: 1, id: 68414, name: 'Divine Verdict'}],
	[MtgaSet.XLN, {number: 1, id: 65961, name: 'Adanto Vanguard'}],
]);

const MAPPED_IDS: Map<MtgaSet, CardMap> = new Map();

function walkSet(set: MtgaSet) {
	const knownId = KNOWN_IDS.get(set);
	assert(knownId, `No known id for set: ${set}`);
	const cards = SETS[set]['cards'];
	assert(cards && cards.length, `No cards for set: ${set}`);

	for (const card of cards) {
		console.log(card.name);
	}
}

walkSet(MtgaSet.M19);