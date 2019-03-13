import { Component } from "react";

declare type CalendarProps = {
    visibleMonths?: number
    className?: string
    style?: object
    variation?: TCalVariation
    value?: any[] | any
    initDate?: any
    today?: any
    range?: boolean
    minYear?: number
    maxYear?: number
    minDate?: any
    maxDate?: any
    showYear?: boolean
    showMonthSwitch?: boolean
    highlightWeekend?: boolean
    onChange?: (...args: any[]) => any
}
declare type CalendarState = {
    data: any[];
    dates: any[];
} | {
    dates: any[];
    animate: boolean;
} | {
    animate: boolean;
    data: any[];
} | {
    data: any[];
    dates: any[];
}
export default class Calendar extends Component<CalendarProps, CalendarState> {
    /**
     * @prop {Array.<{displayMonth, displayYear, first, last}>}   data
     * @prop {Array.<number>}                                     dates
     * @prop {boolean}                                            animate
     */
    state: {
        data: any[];
        dates: any[];
    }
    componentDidUpdate(prevProps: any): void;
    resetState(): void;
    getState(props: any): {
        data: any[];
        dates: any[];
    }
    switchMonth(displayData: any): void;
    calculateDates(displayData: any): {
        data: any[];
        dates: any[];
    }
    getMonthDates({ months, displayData }: {
        months: any;
        displayData: any;
    }): {
        meta: {
            displayMonth: any;
            displayYear: any;
            first: any;
            last: any;
        };
        dates: any[];
    }
    setNewDates(event: any, [numberFrom, numberTo]: [any, any?]): void
    onPrev: () => void
    onNext: () => void
    onClick: (event: any, day: any) => void
    renderCalendar(params: any): JSX.Element
}
export {};
