function count_occurs(str) {
	if (str.length === 0) {
		console.log("empty string");
	} else {
		let ans = new Map();
		for (let i = 0; i < str.length; i++) {
			ans.set(str[i], 0)
		}
		for (let i = 0; i < str.length; i++) {
			let k = ans.get(str[i])
			ans.set(str[i], k + 1)
		}
		for ([key, value] of ans) {
			console.log(`${key}=${value}`);
		}
	}
}
let str = "abcadeecfb";
count_occurs(str);