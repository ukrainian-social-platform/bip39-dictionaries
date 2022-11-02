const dictionaries = {
	// standard
	cn_s: () => import('bip39/src/wordlists/chinese_simplified.json'),
	cn_t: () => import('bip39/src/wordlists/chinese_traditional.json'),
	cz:   () => import('bip39/src/wordlists/czech.json'),
	en:   () => import('bip39/src/wordlists/english.json'),
	fr:   () => import('bip39/src/wordlists/french.json'),
	it:   () => import('bip39/src/wordlists/italian.json'),
	ja:   () => import('bip39/src/wordlists/japanese.json'),
	ko:   () => import('bip39/src/wordlists/korean.json'),
	pt:   () => import('bip39/src/wordlists/portuguese.json'),
	sp:   () => import('bip39/src/wordlists/spanish.json'),
	//custom
	uk:   () => import('../custom/uk.yml'),
	pl:   () => import('../custom/pl.yml'),
};

type Lang = keyof typeof dictionaries;

const cache: {[x in Lang]?: string[] | Promise<string[]>} = {};

export default async function getDictionary(name: Lang) {
	if (!(name in cache)) {
		cache[name] = dictionaries[name]().then(({ default: dictionary }) => {
			cache[name] = dictionary;
			return dictionary;
		});
	}
	return await cache[name];
}
