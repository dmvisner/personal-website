import prisma from "~/types/prisma";
import { Trade as PrismaTrade } from "@prisma/client";

import Repository from "~/types/repository";
import Trade from "~/types/model/trade";
import DistributiveOmit from "~/types/utility/distributive-omit";

const TradeRepository: Repository<Trade> = {
    getAll: async () => {
        const trades = await prisma.trade.findMany();
        return trades.map(convertPrismaToTrade);
    },
    getById: async (id: number) => {
        const trade = await prisma.trade.findUnique({
            where: {
                id: id
            }
        });

        return trade ? convertPrismaToTrade(trade) : null;
    },
    create: function (data: DistributiveOmit<Trade, "id">): Promise<Trade> {
        throw new Error("Function not implemented.");
    },
    update: function (id: number, data: Partial<Trade>): Promise<Trade | null> {
        throw new Error("Function not implemented.");
    },
    delete: function (id: number): Promise<Trade | null> {
        throw new Error("Function not implemented.");
    }
}

function convertPrismaToTrade(prismaTrade: PrismaTrade): Trade {
    return prisma as unknown as Trade;
}

function convertTradeToPrisma(trade: Trade): PrismaTrade {
    return trade as unknown as PrismaTrade;
}

export default TradeRepository;