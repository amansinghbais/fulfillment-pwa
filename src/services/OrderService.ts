import { api } from '@/adapter';

const findOpenOrders = async (query: any): Promise <any>  => {
  return api({
   // TODO: We can replace this with any API
    url: "solr-query", 
    method: "post",
    data: query
  });
}

const findCompletedOrders = async (query: any): Promise <any>  => {
  return api({
   // TODO: We can replace this with any API
    url: "solr-query",
    method: "post",
    data: query
  });
}

const findInProgressOrders = async (query: any): Promise <any>  => {
  return api({
    // TODO: We can replace this with any API
    url: "solr-query", 
    method: "post",
    data: query
  });
}

const packOrder = async (query: any): Promise <any> => {
  return api({
    url: "/service/packStoreFulfillmentOrder",
    method: "post",
    data: query
  })
}

const packOrders = async (query: any): Promise <any> => {
  return api({
    url: "/service/bulkPackStoreFulfillmentOrders",
    method: "post",
    data: query
  })
}

const bulkShipOrders = async (query: any): Promise<any> => {
  return api({
    url: "bulkShipOrders",
    method: "post",
    data: query
  })
}

const unpackOrder = async (query: any): Promise<any> => {
  return api({
    url: "service/unlockStoreFulfillmentOrder",
    method: "post",
    data: query
  })
}

const rejectOrderItem = async (payload: any): Promise <any> => {
  return api({
    url: "rejectOrderItem",
    method: "post",
    data: payload
  });
}

const addShipmentBox = async (payload: any): Promise <any> => {
  return api({
    url: "service/addShipmentPackage",
    method: "post",
    data: payload
  });
}

const updateOrder = async (payload: any): Promise <any> => {
  return api({
    url: "updateOrder",
    method: "post",
    data: payload.data,
    headers: payload.headers
  })
}

export const OrderService = {
  addShipmentBox,
  bulkShipOrders,
  findCompletedOrders,
  findInProgressOrders,
  findOpenOrders,
  packOrder,
  packOrders,
  rejectOrderItem,
  unpackOrder,
  updateOrder
}
