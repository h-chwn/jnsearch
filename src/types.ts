export interface SearchResult {
    data: Data;
    meta: any;
  }
  
  export interface Data {
    transactionId: string;
    emptyResult: EmptyResult;
    size: number;
    sortOptions: SortOption[];
    searchFilterComponent: SearchFilterComponent;
    totalSize: number;
    searchStartDT: string;
    items: Item[];
    changedProductFilterType: boolean;
    standardPriceShow: number;
    resultType: number;
  }
  export interface Item {
    seq: number;
    productPositionNo: number;
    platformType: number;
    price: number;
    url: string;
    title: string;
    state: number;
    sortDate: string;
    mainLocationName: string;
    articleSeq: number;
    articleUrl: string;
    videoProductYn: string;
    wishCount: number;
    jnPayBadgeFlag: boolean;
    pickupBadgeFlag: boolean;
    highlightedTitle: string;
    storeSeq: number;
    detailImgUrl: string;
    locationNames: string[];
  }
  export interface SearchFilterComponent {
    priceFilter: number[];
    parcelFeeYn: ParcelFeeYn[];
    productFilterType: ProductFilterType[];
    registPeriod: ProductFilterType[];
    saleYn: ParcelFeeYn[];
    productCondition: ProductFilterType[];
  }
  export interface ProductFilterType {
    text: string;
    code: string;
  }
  export interface ParcelFeeYn {
    text: string;
    code: string;
    displayText: string;
  }
  export interface SortOption {
    sortType: string;
    sortName: string;
    sortOrder: number;
  }
  export interface EmptyResult {
    joongnaWebUrl?: any;
    noticeCode?: any;
    type: number;
    buttonText: string;
    buttonUrl: string;
    notice: string;
    subNotice: string[];
    image: Image;
    loginCheck: boolean;
  }
  export interface Image {
    width: number;
    height: number;
    url: string;
  }
  