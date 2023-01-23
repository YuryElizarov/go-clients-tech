import {configureStore} from '@reduxjs/toolkit'
import {save, load} from 'redux-localstorage-simple';
import appSlice, {AppState} from "./app/appSlice";
import messengerSlice, {MessengerState} from "./messenger/messengerSlice";
import reviewSlice, {ReviewState} from "./review/reviewSlice";
import profileSlice, {ProfileState} from "./profile/profileSlice";
import bookingSlice, {BookingState} from "./booking/bookingSlice";
import newsSlice, {NewsState} from "./news/newsSlice";
import waitlistSlice, {WaitlistState} from "./waitlist/waitlistSlice";
import formsSlice, {FormsState} from "./forms/formsSlice";
import paymentSlice, {PaymentState} from "./payment/paymentSlice";
import calendarSlice, {CalendarState} from "./calendar/calendarSlice";
import stepsSlice, {StepsState} from "./steps/stepsSlice";

type MergedState = {
    app: AppState,
    messenger: MessengerState,
    review: ReviewState,
    profile: ProfileState,
    booking: BookingState,
    news: NewsState,
    waitlist: WaitlistState,
    forms: FormsState,
    payment: PaymentState,
    calendar: CalendarState,
    steps: StepsState,
}
// const PERSISTED_KEYS: string[] = ['app']
const PERSISTED_KEYS: string[] = ['']
const loadedState = load({states: PERSISTED_KEYS}) as MergedState
export const store = configureStore({
    reducer: {
        app: appSlice,
        messenger: messengerSlice,
        review: reviewSlice,
        profile: profileSlice,
        booking: bookingSlice,
        news: newsSlice,
        waitlist: waitlistSlice,
        forms: formsSlice,
        payment: paymentSlice,
        calendar: calendarSlice,
        steps: stepsSlice,
    },
    preloadedState: loadedState,
    devTools: true,
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({
        thunk: true,
    })
        .concat(save({states: PERSISTED_KEYS}))
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch