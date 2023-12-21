type Direction = "Bullish" | "Bearish" | "Neutral";
type Result = "Profit" | "Loss";
type Strategy = "Strangle" | "1 1 2" | "Put"

type CreditSpread = {
    credit: number;
}

type DebitSpread = {
    debit: number;
}

type Open = {
    id: number;
    underlyingSymbol: string;
    openDate: Date;
    underlyingPrediction: Direction;
    rationale: string;
    openPrice: number;
    currentPrice: number;
    buyingPowerEffect: number;
    commissionAndFees: number;
}

type Closed = {
    closeDate: Date;
    closePrice: number;
    result: Result;
    closingThoughts: string;
}

type Strangle = {
    strategy: Extract<Strategy, "Strangle">
    exitProfitPercentage: 50;
    exitLossMultiplier: 3;
    maxProfit: number;
} & Open & CreditSpread

type OneOneTwo = {
    strategy: Extract<Strategy, "1 1 2">;
    exitProfitPercentage: undefined;
    exitLossMultiplier: 3;
    maxProfit: number;
    tailProfit: number;
} & Open & CreditSpread

type PutLeap = {
    strategy: Extract<Strategy, "Put">;
    exitProfitPercentage: 30;
    exitLossMultiplier: undefined;
    maxProfit: number;
} & Open & CreditSpread

type Put = {
    strategy: Extract<Strategy, "Put">;
    exitProfitPercentage: 50;
    exitLossMultiplier: 1;
    maxProfit: number;
} & Open & CreditSpread

type OpenTrade = Strangle | OneOneTwo | PutLeap | Put
type ClosedTrade = OpenTrade & Closed
type Trade = OpenTrade | ClosedTrade

export default Trade;