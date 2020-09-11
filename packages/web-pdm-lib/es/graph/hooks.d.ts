import { Graph } from '@antv/g6';
export declare type IUseUpdateItem = {
    currentModel: string;
    graph: Graph;
    showNameOrLabel: boolean;
    zoom: number;
    checkNum: number;
    themeColor: string;
};
export declare const useUpdateItem: ({ currentModel, graph, showNameOrLabel, zoom, themeColor }: IUseUpdateItem) => void;
