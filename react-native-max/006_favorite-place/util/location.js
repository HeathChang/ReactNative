import { GOOGLE_API_KEY } from "@env";


export const getMapPreview = (lat, lng) => {
	const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${ lat },${ lng }&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:C%7C${ lat },${ lng }&key=${ GOOGLE_API_KEY.replace(/['";]/g, '') }`;
	return imagePreviewUrl;
};


// import {GOOGLE_API_KEY} from "@env"
//
//
// export const getMapPreview = (lat, lng) => {
// 	// const temp = GOOGLE_API_KEY
// 	const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${ lat },${ lng }&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:C%7C${ lat },${ lng }&key=${ GOOGLE_API_KEY.replace(/[^a-zA-Z]/g, '') }`;
// 	console.log(223, GOOGLE_API_KEY, imagePreviewUrl)
//
// 	return imagePreviewUrl;
// };