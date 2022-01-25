import { createContext, useState } from 'react';

const PromoContext = createContext();

const promoValue = 10;
const promoState = true;

const PromoProvider = ({ children }) => {
	const [promo, setPromo] = useState(promoState);

	const handlePromo = () => {
		setPromo(false);
	};
	const data = { promo, handlePromo, promoValue };
	return <PromoContext.Provider value={data}>{children}</PromoContext.Provider>;
};
export { PromoProvider };
export default PromoContext;
