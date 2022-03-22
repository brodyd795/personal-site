import {GetReadingListResponse} from '../pages/api/controllers/get-reading-list';

export const readingListDefaultData: GetReadingListResponse = {
	list: [
		{
			id: 1,
			url: 'https://kentcdodds.com/blog/useeffect-vs-uselayouteffect',
			date_added: new Date(),
			title: 'useEffect vs useLayoutEffect',
			image:
				'https://kentcdodds.com/img/social?type=2&title=useEffect+vs+useLayoutEffect&preTitle=Check+out+this+article&img=unsplash%2Fphoto-1474718723952-48d2a016108f&url=kentcdodds.com%2Fblog%2Fuseeffect-vs-uselayouteffect',
			description: 'The simple rules for when to use each.',
			domain: 'kentcdodds.com'
		},
		{
			id: 2,
			url: 'https://leerob.io/blog/career',
			date_added: new Date(),
			title: 'How I Became a Software Engineer',
			image: 'https://leerob.io/static/images/career/banner.png',
			description:
				'Learn about my overnight success story, ten years in the making.',
			domain: 'leerob.io'
		},
		{
			id: 3,
			url: 'https://www.benmvp.com/blog/using-jest-mock-functions-typescript/',
			date_added: new Date(),
			title: 'Using Jest mock functions in TypeScript',
			image:
				'https://res.cloudinary.com/benmvp/image/upload/w_1280,h_669,c_fill,q_auto,f_auto/w_666,c_fit,co_rgb:ffffff,g_north_west,x_550,y_64,l_text:roboto_70_bold:Using%2520Jest%2520mock%2520functions%2520in%2520TypeScript/w_666,c_fit,co_rgb:ffffff,g_south_west,x_550,y_64,l_text:roboto_40_light:How%2520to%2520represent%2520an%2520imported%2520function%2520in%2520TypeScript%2520that%2520has%2520been%2520replaced%2520by%2520a%2520Jest%2520mock/w_350,c_fit,co_rgb:ffffff,g_south_west,x_64,y_64,l_text:roboto_40:April%252025%252C%25202021/v1619329795/benmvp/blog-post-template_gkpzgc',
			description:
				'How to represent an imported function in TypeScript that has been replaced by a Jest mock',
			domain: 'benmvp.com'
		}
	]
};
