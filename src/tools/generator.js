export default function generator(a,b) {
	return '_' + Math.random().toString(36).substr(a,b);
};