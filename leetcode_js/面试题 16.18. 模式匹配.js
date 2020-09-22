/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function (pattern, value) {
	let count_a = 0;
	let count_b = 0;
	const p_len = pattern.length;
	for (let i = 0; i < p_len; i++) {
		if (pattern[i] === 'a') {
			count_a++;
		} else {
			count_b++;
		}
	}
	if (count_a < count_b) {
		const t = count_a;
		count_a = count_b;
		count_b = t;
		let s = '';
		for (let i = 0; i < p_len; i++) {
			if (pattern[i] === 'a') {
				s += 'b';
			} else {
				s += 'a';
			}
		}
		pattern = s;
	}
	if (value.length === 0) {
		return count_b === 0;
	}

	if (pattern.length === 0) {
		return false;
	}

	for (let a_len = 0; count_a * a_len <= value.length; a_len++) {
		const n = value.length - count_a * a_len;
		if ((count_b === 0 && n === 0) || (count_b !== 0 && n % count_b === 0)) {
			const b_len = count_b === 0 ? 0 : Math.floor(n / count_b);
			let pos = 0;
			let sign = true;
			let value_a = '';
			let value_b = '';
			for (let i = 0; i < p_len; i++) {
				if (pattern[i] === 'a') {
					const sub = value.substr(pos, a_len);
					if (!value_a.length) {
						value_a = sub;
					} else if (value_a !== sub) {
						sign = false;
						break;
					}
					pos += a_len;
				} else {
					const sub = value.substr(pos, b_len);
					if (!value_b.length) {
						value_b = sub;
					} else if (value_b !== sub) {
						sign = false;
						break;
					}
					pos += b_len;
				}
			}
			if (sign && value_a !== value_b) {
				return true;
			}
		}
	}
	return false;
};
