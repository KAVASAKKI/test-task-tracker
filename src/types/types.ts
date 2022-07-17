export type TTraker = {
  id: string;
  name: string;
  startTime: number;
  leftTime: number;
  isPlay: boolean;
};

export interface ReduxState {
  trackers: { list: TTraker[] };
}
