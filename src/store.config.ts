import AccessoriesImage from "@/images/accessories.jpg";
import ApparelImage from "@/images/apparel.jpg";

export const config = {
	categories: [
		{ name: "Accessories", slug: "accessories", image: AccessoriesImage },
		{ name: "Apparel", slug: "apparel", image: ApparelImage },
	],

	social: {
		x: "https://x.com/savepong",
		facebook: "https://facebook.com/savepong.offical",
	},

	contact: {
		email: "pisutakarathada@gmail.com",
		phone: "+66943589941",
		address: "119/177 Handmade.in.th Songprapa Rd., Bangkok, Thailand",
	},
};

export type StoreConfig = typeof config;
export default config;
