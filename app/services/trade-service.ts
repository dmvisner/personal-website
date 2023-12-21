import Trade from "~/types/model/trade";
import Repository from "~/types/repository";
import TradeService from "~/types/services/trade-service";
import DistributiveOmit from "~/types/utility/distributive-omit";

export function getTradeService(repository: Repository<Trade>): TradeService {
    return {
        getTradeById: (id: number) => repository.getById(id),
        getAllTrades: () => repository.getAll(),
        createTrade: (trade: DistributiveOmit<Trade, "id">) => repository.create(trade),
    }
}