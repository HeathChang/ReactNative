import { GOOGLE_API_KEY } from "@env";

const replaceGoogleKey = GOOGLE_API_KEY.replace(/['";]/g, '');

export const getMapPreview = (lat, lng) => {
	const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${ lat },${ lng }&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:C%7C${ lat },${ lng }&key=${ replaceGoogleKey }`;
	return imagePreviewUrl;
};

export const getAddress = async (lat, lng) => {
	const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${ lat },${ lng }&key=${ replaceGoogleKey }`;
	const response = await fetch(url);

	if (!response.ok) throw new Error("FAILED");
	const data = await response.json();
	return data.results?.[0].formatted_address;
};