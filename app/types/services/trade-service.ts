import Trade from "../model/trade";
import DistributiveOmit from "../utility/distributive-omit";

interface TradeService {
    getTradeById(id: number): Promise<Trade | null>;
    getAllTrades(): Promise<Trade[]>;
    createTrade(trade: DistributiveOmit<Trade, "id">): Promise<Trade>;
}

export default TradeService;