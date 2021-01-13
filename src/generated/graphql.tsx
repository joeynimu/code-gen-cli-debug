import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   * 
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: any;
  /**
   * Leverages the internal Python implmeentation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: any;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
};

export type Query = {
  __typename?: 'Query';
  /** The ID of the object */
  node: Maybe<Node>;
  product_loss_reasons: Maybe<ProductLossReasonGqlConnection>;
  product_loss_reason_by_id: Maybe<ProductLossReasonGql>;
  product_loss_reason_by_product_id: Maybe<ProductLossReasonGql>;
  storage_unit_types: Maybe<Array<Maybe<StorageUnitTypeGql>>>;
  warehouses: Maybe<WarehouseGqlConnection>;
  stock_intakes: Maybe<StockIntakeGqlConnection>;
  stock_intake_by_id: Maybe<StockIntakeGql>;
  stock_intake_items: Maybe<StockIntakeItemGqlConnection>;
  stock_intake_item_by_id: Maybe<StockIntakeItemGql>;
  stock_intake_items_by_batch_id: Maybe<Array<Maybe<StockIntakeItemGql>>>;
  processing_loss: Maybe<ProcessingLossGqlConnection>;
  processing_loss_by_id: Maybe<ProcessingLossGql>;
  processing_loss_items: Maybe<ProcessingLossItemGqlConnection>;
  processing_loss_item_by_id: Maybe<ProcessingLossItemGql>;
  storage_units: Maybe<StorageUnitGqlConnection>;
  storage: Maybe<StorageGqlConnection>;
  storage_by_id: Maybe<StorageGql>;
  v2_stock_availability: Maybe<StockAvailabilityGqlConnection>;
  v2_stock_availability_by_id: Maybe<StockAvailabilityGqLv2>;
  v2_stock_availability_product_item_summary: Maybe<StockAvailabilitySummaryGqlConnection>;
  stock_availability_by_product_item: Maybe<StockAvailabilityProductItemGqlConnection>;
  v2_stock_availability_by_product_item_id: Maybe<StockAvailabilityGqLv2>;
  loss_reasons: Maybe<Array<Maybe<LossReasonGql>>>;
  loss_reason_by_id: Maybe<LossReasonGql>;
  processing_loss_types: Maybe<ProcessingLossTypeGqlConnection>;
  processing_loss_type_by_id: Maybe<ProcessingLossTypeGql>;
  inventory_by_product_item: Maybe<InventoryGql>;
  stock_intake_weight_by_batch_id: Maybe<Scalars['Float']>;
  processing_loss_weight_by_batch_id: Maybe<Scalars['Float']>;
  distribution_centers: Maybe<Array<Maybe<DistributionCenterGql>>>;
  distribution_center_by_id: Maybe<DistributionCenterGql>;
  stock_take: Maybe<StockTakeGqlConnection>;
  stock_take_by_id: Maybe<StockTakeGql>;
  batches: Maybe<BatchGqlConnection>;
  batch_by_id: Maybe<BatchGql>;
  articles: Maybe<ArticleGqlConnection>;
  article_by_id: Maybe<ArticleGql>;
  saved_articles: Maybe<SavedArticleGqlConnection>;
  saved_article_by_id: Maybe<SavedArticleGql>;
  bids: Maybe<BidGqlConnection>;
  bid_applications: Maybe<BidApplicationGqlConnection>;
  bid_by_id: Maybe<BidGql>;
  bids_by_category_ids: Maybe<BidGqlConnection>;
  count_bids_by_category_ids: Maybe<Scalars['Int']>;
  bid_application_by_id: Maybe<BidApplicationGql>;
  bid_status: Maybe<Array<Maybe<BidStatus>>>;
  bid_application_status: Maybe<Array<Maybe<BidApplicationStatus>>>;
  bid_application_status_type: Maybe<Array<Maybe<BidApplicationType>>>;
  bid_application_by_agent_id: Maybe<BidApplicationGqlConnection>;
  bid_application_by_vehicle_registration: Maybe<BidApplicationGqlConnection>;
  harvests: Maybe<HarvestGqlConnection>;
  harvest_issues: Maybe<Array<Maybe<HarvestIssueGql>>>;
  harvest_issue_types: Maybe<Array<Maybe<HarvestIssueTypeGql>>>;
  harvest_by_id: Maybe<HarvestGql>;
  harvest_issues_by_harvest_id: Maybe<Array<Maybe<HarvestIssueGql>>>;
  payment_details: Maybe<PaymentDetailGqlConnection>;
  harvest_items: Maybe<HarvestItemGqlConnection>;
  harvest_item_by_id: Maybe<HarvestItemGql>;
  payment_account_types: Maybe<Array<Maybe<PaymentAccountType>>>;
  farmer_types: Maybe<Array<Maybe<FarmerType>>>;
  farmers: Maybe<FarmerGqlConnection>;
  farmers_by_collection_center_id: Maybe<Array<Maybe<FarmerGql>>>;
  farmers_by_area_id: Maybe<Array<Maybe<FarmerGql>>>;
  farmer_by_id: Maybe<FarmerGql>;
  sourcing_agents: Maybe<SourcingAgentGqlConnection>;
  sourcing_agent_by_id: Maybe<SourcingAgentGql>;
  farm_by_id: Maybe<FarmGql>;
  farms: Maybe<FarmGqlConnection>;
  farms_by_farmer_id: Maybe<Array<Maybe<FarmGql>>>;
  farmer_payment_accounts: Maybe<FarmerPaymentAccountGqlConnection>;
  agent_feedback: Maybe<AgentFeedbackGqlConnection>;
  agent_feedback_by_id: Maybe<AgentFeedbackGql>;
  categories: Maybe<Array<Maybe<Scalars['GenericScalar']>>>;
  discovery_methods: Maybe<Array<Maybe<DiscoveryGql>>>;
  supplier_users: Maybe<SupplierUserGqlConnection>;
  supplier_user_by_id: Maybe<SupplierUserGql>;
  supplier_user_by_supplier_id: Maybe<SupplierUserGqlConnection>;
  supplier_products: Maybe<SupplierProductGqlConnection>;
  supplier_product_by_id: Maybe<SupplierProductGql>;
  supplier_product_by_supplier_id: Maybe<SupplierProductGqlConnection>;
  booking_by_id: Maybe<BookingGql>;
  bookings: Maybe<BookingGqlConnection>;
  sourcing_price_range: Maybe<PriceRangeGqlConnection>;
  sourcing_price_range_by_id: Maybe<PriceRangeGql>;
  sourcing_price_range_by_product_id: Maybe<PriceRangeGql>;
  booking_items: Maybe<BookingItemGqlConnection>;
  booking_item_by_id: Maybe<BookingItemGql>;
  areas: Maybe<Array<Maybe<AreaGql>>>;
  area_by_id: Maybe<AreaGql>;
  collection_centers: Maybe<Array<Maybe<CollectionCenterGql>>>;
  collection_centers_by_area_id: Maybe<Array<Maybe<CollectionCenterGql>>>;
  collection_center_by_id: Maybe<CollectionCenterGql>;
  harvest_areas: Maybe<Array<Maybe<HarvestAreaGql>>>;
  harvest_area_by_id: Maybe<HarvestAreaGql>;
  harvest_areas_by_collection_center_id: Maybe<Array<Maybe<HarvestAreaGql>>>;
  product_promotional_banners: Maybe<Array<Maybe<ProductPromotionalBannerGql>>>;
  product_promotional_banner_by_id: Maybe<ProductPromotionalBannerGql>;
  business_domains: Maybe<Array<Maybe<BusinessDomain>>>;
  products: Maybe<Array<Maybe<ProductGql>>>;
  paginated_products: Maybe<ProductGqlConnection>;
  products_by_domain: Maybe<Array<Maybe<ProductGql>>>;
  products_by_unit_domain: Maybe<Array<Maybe<ProductGql>>>;
  product_by_id: Maybe<ProductGql>;
  product_items_by_product_id: Maybe<Array<Maybe<ProductItemGql>>>;
  product_item_by_id: Maybe<ProductItemGql>;
  product_items: Maybe<Array<Maybe<ProductItemGql>>>;
  paginated_product_items: Maybe<ProductItemGqlConnection>;
  product_uoms_by_product_id: Maybe<Array<Maybe<ProductUomgql>>>;
  uom_by_product_item_id: Maybe<Array<Maybe<ProductItemUomgql>>>;
  uoms: Maybe<Array<Maybe<Uomgql>>>;
  uom_by_id: Maybe<Uomgql>;
  pricing: Maybe<Array<Maybe<PricingGql>>>;
  pricing_by_id: Maybe<PricingGql>;
  pricing_by_product_item_id: Maybe<Array<Maybe<PricingGql>>>;
  variant_by_id: Maybe<VariantGql>;
  product_variants: Maybe<Array<Maybe<VariantGql>>>;
  packaging_units: Maybe<Array<Maybe<PackagingUnitGql>>>;
  packaging_unit_by_id: Maybe<PackagingUnitGql>;
  return_reasons: Maybe<Array<Maybe<ReturnReasonGql>>>;
  return_reason_by_id: Maybe<ReturnReasonGql>;
  product_categories: Maybe<Array<Maybe<CategoryGql>>>;
  product_category_by_id: Maybe<CategoryGql>;
  product_categories_by_department_id: Maybe<Array<Maybe<CategoryGql>>>;
  product_departments: Maybe<Array<Maybe<DepartmentGql>>>;
  product_department_by_id: Maybe<DepartmentGql>;
  recommended_product_items: Maybe<Array<Maybe<ProductItemGql>>>;
  product_types: Maybe<Array<Maybe<ProductType>>>;
  product_items_by_ids: Maybe<Array<Maybe<ProductItemGql>>>;
  bundle_association_by_sku: Maybe<Array<Maybe<BundleAssociationGql>>>;
  product_item_segments: Maybe<Array<Maybe<ProductItemSegmentGql>>>;
  product_item_segment_by_id: Maybe<ProductItemSegmentGql>;
  pricing_v2: Maybe<PricingV2GqlConnection>;
  pricing_v2_by_id: Maybe<PricingV2Gql>;
  pricing_v2_by_product_item_id: Maybe<PricingV2Gql>;
  pricing_v2_by_region_id: Maybe<PricingV2Gql>;
  dynamic_pricing: Maybe<DynamicPricingGqlConnection>;
  dynamic_pricing_by_id: Maybe<DynamicPricingGql>;
  work_orders: Maybe<WorkOrderGqlConnection>;
  work_order_by_id: Maybe<WorkOrderGql>;
  work_order_definitions: Maybe<Array<Maybe<WorkOrderDefinitionGql>>>;
  work_order_definition_by_id: Maybe<WorkOrderDefinitionGql>;
  work_order_items: Maybe<WorkOrderItemGqlConnection>;
  work_order_item_by_id: Maybe<WorkOrderItemGql>;
  work_order_reasons: Maybe<Array<Maybe<WorkOrderReasonGql>>>;
  work_order_reason_by_id: Maybe<WorkOrderReasonGql>;
  delivery_returns: Maybe<DeliveryReturnGqlConnection>;
  delivery_return_by_id: Maybe<DeliveryReturnGql>;
  delivery_return_items: Maybe<DeliveryReturnItemGqlConnection>;
  delivery_return_item_by_id: Maybe<DeliveryReturnItemGql>;
  order_returns: Maybe<OrderReturnGqlConnection>;
  order_return_by_id: Maybe<OrderReturnGql>;
  order_return_items: Maybe<OrderReturnItemGqlConnection>;
  order_return_item_by_id: Maybe<OrderReturnItemGql>;
  sales_return_reasons: Maybe<Array<Maybe<ReturnReasonGql>>>;
  sales_return_reason_by_id: Maybe<ReturnReasonGql>;
  stock_notifications: Maybe<StockNotificationGqlConnection>;
  stock_notification_by_id: Maybe<StockNotificationGql>;
  payment_accounts_v2: Maybe<PaymentAccountV2GqlConnection>;
  payment_account_v2_by_id: Maybe<PaymentAccountV2Gql>;
  route_payment_accounts_v2: Maybe<RoutePaymentAccountV2GqlConnection>;
  route_payment_account_v2_by_id: Maybe<RoutePaymentAccountV2Gql>;
  route_payment_accounts_v2_by_route_id: Maybe<Array<Maybe<RoutePaymentAccountV2Gql>>>;
  payments_v2: Maybe<PaymentV2GqlConnection>;
  payment_v2_by_id: Maybe<PaymentV2Gql>;
  payment_modes: Maybe<Array<Maybe<Scalars['String']>>>;
  deliveries_v2: Maybe<DeliveryV2GqlConnection>;
  delivery_v2_by_id: Maybe<DeliveryV2Gql>;
  delivery_fee_schedules: Maybe<DeliveryFeeScheduleGqlConnection>;
  delivery_fee_schedule_by_id: Maybe<DeliveryFeeScheduleGql>;
  realized_revenue_v2: Maybe<RealizedRevenueV2Gql>;
  delivery_items_v2: Maybe<DeliveryItemV2GqlConnection>;
  delivery_item_v2_by_id: Maybe<DeliveryItemV2Gql>;
  shop_delivery_summary_v2: Maybe<ShopDeliverySummaryV2Gql>;
  delivery_product_summary_v2: Maybe<DeliveryProductSummaryV2GqlConnection>;
  trader_entities_v2: Maybe<Array<Maybe<TraderEntityV2Gql>>>;
  trader_entity_v2_by_id: Maybe<TraderEntityV2Gql>;
  orders_v2: Maybe<OrderV2GqlConnection>;
  order_v2_by_id: Maybe<OrderV2Gql>;
  current_orders_v2: Maybe<Array<Maybe<OrderV2Gql>>>;
  order_items_v2: Maybe<OrderItemV2GqlConnection>;
  order_item_v2_by_id: Maybe<OrderItemV2Gql>;
  order_assignments_v2: Maybe<OrderAssignmentV2GqlConnection>;
  order_assignment_v2_by_id: Maybe<OrderAssignmentV2Gql>;
  stock_ordered_by_product_item: Maybe<StockOrderedGql>;
  shop_order_summary_v2: Maybe<ShopOrderSummaryV2Gql>;
  order_product_summary_v2: Maybe<OrderProductSummaryV2GqlConnection>;
  projected_revenue_v2: Maybe<ProjectedRevenueV2Gql>;
  route_plan_order_summary: Maybe<RoutePlanOrderSummaryGql>;
  regions_v2: Maybe<RegionV2GqlConnection>;
  region_v2_by_id: Maybe<RegionV2Gql>;
  areas_v2: Maybe<AreaV2GqlConnection>;
  area_v2_by_id: Maybe<AreaV2Gql>;
  depots_v2: Maybe<DepotV2GqlConnection>;
  depot_v2_by_id: Maybe<DepotV2Gql>;
  route_types: Maybe<Array<Maybe<RouteType>>>;
  routes_v2: Maybe<RouteV2GqlConnection>;
  route_v2_by_id: Maybe<RouteV2Gql>;
  route_teams_v2: Maybe<RouteTeamV2GqlConnection>;
  route_team_v2_by_id: Maybe<RouteTeamV2Gql>;
  route_team_v2_by_user_id: Maybe<RouteTeamV2Gql>;
  route_team_members_v2: Maybe<RouteTeamMemberV2GqlConnection>;
  route_team_member_v2_by_id: Maybe<RouteTeamMemberV2Gql>;
  customers_v2: Maybe<CustomerV2GqlConnection>;
  customer_v2_by_id: Maybe<CustomerV2Gql>;
  shops_v2: Maybe<ShopV2GqlConnection>;
  shops_v2_by_customer_id: Maybe<Array<Maybe<ShopV2Gql>>>;
  shop_v2_by_id: Maybe<ShopV2Gql>;
  shop_types_v2: Maybe<Array<Maybe<ShopTypeV2Gql>>>;
  shop_type_v2_by_id: Maybe<ShopTypeV2Gql>;
  customer_types_v2: Maybe<Array<Maybe<CustomerTypeV2Gql>>>;
  vendor_kyc: Maybe<VendorKycgqlConnection>;
  vendor_kyc_by_id: Maybe<VendorKycgql>;
  customer_type_v2_by_id: Maybe<CustomerTypeV2Gql>;
  customer_v2_by_phone_number: Maybe<CustomerV2Gql>;
  vendor_finance_plans: Maybe<Array<Maybe<VendorFinancePlanGql>>>;
  delivery_fee_by_shop_id: Maybe<ShopDeliveryFeeGql>;
  dispatches: Maybe<DispatchGqlConnection>;
  dispatch: Maybe<DispatchGqlConnection>;
  dispatch_by_id: Maybe<DispatchGql>;
  dispatch_by_route_id: Maybe<DispatchGql>;
  dispatch_item_by_id: Maybe<DispatchItemGql>;
  dispatch_items: Maybe<DispatchItemGqlConnection>;
  stock_transfers: Maybe<StockTransferGqlConnection>;
  stock_transfer: Maybe<StockTransferGqlConnection>;
  stock_transfer_by_id: Maybe<StockTransferGql>;
  stock_transfer_item_by_id: Maybe<StockTransferItemGql>;
  stock_transfer_items: Maybe<StockTransferItemGqlConnection>;
  dispatch_balance: Maybe<DispatchBalanceGql>;
  depot_intakes: Maybe<DepotIntakeGqlConnection>;
  depot_intake: Maybe<DepotIntakeGqlConnection>;
  depot_intake_by_id: Maybe<DepotIntakeGql>;
  depot_intake_item_by_id: Maybe<DepotIntakeItemGql>;
  depot_intake_items: Maybe<DepotIntakeItemGqlConnection>;
  returns: Maybe<ReturnGqlConnection>;
  return_by_id: Maybe<ReturnGql>;
  product_return_item_by_id: Maybe<ProductReturnItemGql>;
  product_return_items: Maybe<ProductReturnItemGqlConnection>;
  packaging_return_item_by_id: Maybe<PackagingReturnItemGql>;
  packaging_return_items: Maybe<PackagingReturnItemGqlConnection>;
  dispatch_product_summary_v2: Maybe<DispatchProductSummaryV2GqlConnection>;
  projected_ph_revenue_v2: Maybe<ProjectedPhRevenueV2Gql>;
  vehicle_stock_allocations: Maybe<VehicleStockAllocationGqlConnection>;
  vehicle_stock_allocation_by_id: Maybe<VehicleStockAllocationGql>;
  sokoloan_repayments: Maybe<SokoLoanRepaymentGqlConnection>;
  sokoloan_repayment_by_id: Maybe<SokoLoanRepaymentGql>;
  lead_callbacks: Maybe<LeadCallbackGqlConnection>;
  lead_callback_by_id: Maybe<LeadCallbackGql>;
  fintech_loans: Maybe<LoanGqlConnection>;
  fintech_loans_by_customer_id: Maybe<LoanGqlConnection>;
  fintech_loan_by_id: Maybe<LoanGql>;
  loan_offers: Maybe<LoanOfferGqlConnection>;
  loan_offer_by_delivery_id: Maybe<LoanOfferGql>;
  loan_offer_by_id: Maybe<LoanOfferGql>;
  loan_requests: Maybe<LoanRequestGqlConnection>;
  loan_request_by_id: Maybe<LoanRequestGql>;
  partner_loan_query_by_customer_id: Maybe<Array<Maybe<PartnerLoanQueryGql>>>;
  fintech_deliveries: Maybe<FintechDeliveryGqlConnection>;
  fintech_deliveries_by_customer_id: Maybe<FintechDeliveryGqlConnection>;
  fintech_customers: Maybe<FintechCustomerGqlConnection>;
  fintech_customer_by_id: Maybe<FintechCustomerGql>;
  fintech_partners: Maybe<Array<Maybe<PartnerGql>>>;
  fintech_partner_by_id: Maybe<PartnerGql>;
  notification_templates: Maybe<NotificationTemplateGqlConnection>;
  notification_template_by_id: Maybe<NotificationTemplateGql>;
  notifications: Maybe<NotificationMessageGqlConnection>;
  notification_by_id: Maybe<NotificationMessageGql>;
  notification_messages_by_user_id: Maybe<NotificationMessageGqlConnection>;
  notification_providers: Maybe<NotificationProviderGqlConnection>;
  notification_provider_by_id: Maybe<NotificationProviderGql>;
  permissions_v2: Maybe<PermissionV2GqlConnection>;
  permission_v2_by_id: Maybe<PermissionV2Gql>;
  users_v2: Maybe<UserV2GqlConnection>;
  user_v2_by_id: Maybe<UserV2Gql>;
  users_v2_by_permissions: Maybe<Array<Maybe<UserV2Gql>>>;
  user_v2_by_id_or_number: Maybe<UserV2Gql>;
  roles_v2: Maybe<RoleV2GqlConnection>;
  role_v2_by_id: Maybe<RoleV2Gql>;
  vehicle_types: Maybe<VehicleTypeGqlConnection>;
  vehicle_type_by_id: Maybe<VehicleTypeGql>;
  vehicles: Maybe<VehicleGqlConnection>;
  vehicle_by_id: Maybe<VehicleGql>;
  route_plans: Maybe<RoutePlanGqlConnection>;
  route_plan_by_id: Maybe<RoutePlanGql>;
  fulfillment_teams: Maybe<FulfillmentTeamGqlConnection>;
  fulfillment_team_by_id: Maybe<FulfillmentTeamGql>;
  static_routes: Maybe<StaticRouteGqlConnection>;
  static_route_by_id: Maybe<StaticRouteGql>;
  depot_route_plan_summary: Maybe<DepotRoutePlanSummaryGql>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryProduct_Loss_ReasonsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryProduct_Loss_Reason_By_IdArgs = {
  product_loss_reason_id: Maybe<Scalars['String']>;
};


export type QueryProduct_Loss_Reason_By_Product_IdArgs = {
  product_id: Maybe<Scalars['String']>;
};


export type QueryWarehousesArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryStock_IntakesArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryStock_Intake_By_IdArgs = {
  stock_intake_id: Maybe<Scalars['String']>;
};


export type QueryStock_Intake_ItemsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryStock_Intake_Item_By_IdArgs = {
  stock_intake_item_id: Maybe<Scalars['String']>;
};


export type QueryStock_Intake_Items_By_Batch_IdArgs = {
  batch_id: Maybe<Scalars['String']>;
};


export type QueryProcessing_LossArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryProcessing_Loss_By_IdArgs = {
  processing_loss_id: Maybe<Scalars['String']>;
};


export type QueryProcessing_Loss_ItemsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryProcessing_Loss_Item_By_IdArgs = {
  processing_loss_item_id: Maybe<Scalars['String']>;
};


export type QueryStorage_UnitsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryStorageArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryStorage_By_IdArgs = {
  storage_id: Maybe<Scalars['String']>;
};


export type QueryV2_Stock_AvailabilityArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryV2_Stock_Availability_By_IdArgs = {
  stock_availability_id: Maybe<Scalars['String']>;
};


export type QueryV2_Stock_Availability_Product_Item_SummaryArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryStock_Availability_By_Product_ItemArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  sale_date: Maybe<Scalars['String']>;
  per_page: Maybe<Scalars['Int']>;
  page: Maybe<Scalars['Int']>;
};


export type QueryV2_Stock_Availability_By_Product_Item_IdArgs = {
  product_item_id: Scalars['String'];
  sale_date: Maybe<Scalars['String']>;
  region_id: Scalars['String'];
};


export type QueryLoss_Reason_By_IdArgs = {
  loss_reason_id: Maybe<Scalars['String']>;
};


export type QueryProcessing_Loss_TypesArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryProcessing_Loss_Type_By_IdArgs = {
  processing_loss_type_id: Maybe<Scalars['String']>;
};


export type QueryInventory_By_Product_ItemArgs = {
  product_item_id: Scalars['String'];
  date: Scalars['String'];
  distribution_center_id: Scalars['String'];
};


export type QueryStock_Intake_Weight_By_Batch_IdArgs = {
  batch_id: Scalars['String'];
};


export type QueryProcessing_Loss_Weight_By_Batch_IdArgs = {
  batch_id: Scalars['String'];
};


export type QueryDistribution_Center_By_IdArgs = {
  distribution_center_id: Maybe<Scalars['String']>;
};


export type QueryStock_TakeArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryStock_Take_By_IdArgs = {
  stock_take_id: Maybe<Scalars['String']>;
};


export type QueryBatchesArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryBatch_By_IdArgs = {
  batch_id: Maybe<Scalars['String']>;
};


export type QueryArticlesArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryArticle_By_IdArgs = {
  article_id: Maybe<Scalars['String']>;
};


export type QuerySaved_ArticlesArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QuerySaved_Article_By_IdArgs = {
  saved_article_id: Maybe<Scalars['String']>;
};


export type QueryBidsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryBid_ApplicationsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryBid_By_IdArgs = {
  bid_id: Maybe<Scalars['String']>;
};


export type QueryBids_By_Category_IdsArgs = {
  categories: Maybe<Array<Maybe<Scalars['String']>>>;
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryCount_Bids_By_Category_IdsArgs = {
  categories: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryBid_Application_By_IdArgs = {
  bid_application_id: Maybe<Scalars['String']>;
};


export type QueryBid_Application_By_Agent_IdArgs = {
  agent_id: Scalars['String'];
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryBid_Application_By_Vehicle_RegistrationArgs = {
  vehicle_registration: Maybe<Scalars['String']>;
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryHarvestsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryHarvest_By_IdArgs = {
  harvest_id: Maybe<Scalars['String']>;
};


export type QueryHarvest_Issues_By_Harvest_IdArgs = {
  harvest_id: Maybe<Scalars['String']>;
};


export type QueryPayment_DetailsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryHarvest_ItemsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryHarvest_Item_By_IdArgs = {
  harvest_item_id: Maybe<Scalars['String']>;
};


export type QueryFarmersArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryFarmers_By_Collection_Center_IdArgs = {
  collection_center_id: Maybe<Scalars['String']>;
  filter: Maybe<Scalars['GenericScalar']>;
};


export type QueryFarmers_By_Area_IdArgs = {
  area_id: Maybe<Scalars['String']>;
  filter: Maybe<Scalars['GenericScalar']>;
};


export type QueryFarmer_By_IdArgs = {
  farmer_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QuerySourcing_AgentsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QuerySourcing_Agent_By_IdArgs = {
  agent_number: Maybe<Scalars['String']>;
  agent_id: Maybe<Scalars['String']>;
};


export type QueryFarm_By_IdArgs = {
  farm_id: Maybe<Scalars['String']>;
};


export type QueryFarmsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryFarms_By_Farmer_IdArgs = {
  farmer_id: Maybe<Scalars['String']>;
  filter: Maybe<Scalars['GenericScalar']>;
};


export type QueryFarmer_Payment_AccountsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryAgent_FeedbackArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryAgent_Feedback_By_IdArgs = {
  agent_feedback_id: Maybe<Scalars['String']>;
};


export type QuerySupplier_UsersArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QuerySupplier_User_By_IdArgs = {
  supplier_user_id: Maybe<Scalars['String']>;
};


export type QuerySupplier_User_By_Supplier_IdArgs = {
  supplier_id: Maybe<Scalars['String']>;
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QuerySupplier_ProductsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QuerySupplier_Product_By_IdArgs = {
  supplier_product_id: Maybe<Scalars['String']>;
};


export type QuerySupplier_Product_By_Supplier_IdArgs = {
  supplier_id: Maybe<Scalars['String']>;
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryBooking_By_IdArgs = {
  booking_id: Maybe<Scalars['String']>;
};


export type QueryBookingsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QuerySourcing_Price_RangeArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QuerySourcing_Price_Range_By_IdArgs = {
  price_range_id: Maybe<Scalars['String']>;
};


export type QuerySourcing_Price_Range_By_Product_IdArgs = {
  product_id: Maybe<Scalars['String']>;
};


export type QueryBooking_ItemsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryBooking_Item_By_IdArgs = {
  booking_item_id: Maybe<Scalars['String']>;
};


export type QueryAreasArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  since: Maybe<Scalars['String']>;
};


export type QueryArea_By_IdArgs = {
  area_id: Maybe<Scalars['String']>;
};


export type QueryCollection_CentersArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  since: Maybe<Scalars['String']>;
};


export type QueryCollection_Centers_By_Area_IdArgs = {
  area_id: Maybe<Scalars['String']>;
  filter: Maybe<Scalars['GenericScalar']>;
};


export type QueryCollection_Center_By_IdArgs = {
  collection_center_id: Maybe<Scalars['String']>;
};


export type QueryHarvest_AreasArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  since: Maybe<Scalars['String']>;
};


export type QueryHarvest_Area_By_IdArgs = {
  harvest_area_id: Maybe<Scalars['String']>;
};


export type QueryHarvest_Areas_By_Collection_Center_IdArgs = {
  collection_center_id: Maybe<Scalars['String']>;
  filter: Maybe<Scalars['GenericScalar']>;
};


export type QueryProduct_Promotional_BannersArgs = {
  active: Maybe<Scalars['Boolean']>;
  published: Maybe<Scalars['Boolean']>;
  filters: Maybe<Scalars['GenericScalar']>;
};


export type QueryProduct_Promotional_Banner_By_IdArgs = {
  banner_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryProductsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  search: Maybe<Scalars['String']>;
};


export type QueryPaginated_ProductsArgs = {
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
};


export type QueryProducts_By_DomainArgs = {
  domain: Maybe<Scalars['String']>;
};


export type QueryProducts_By_Unit_DomainArgs = {
  domain: Maybe<Scalars['String']>;
};


export type QueryProduct_By_IdArgs = {
  product_id: Maybe<Scalars['String']>;
};


export type QueryProduct_Items_By_Product_IdArgs = {
  product_id: Maybe<Scalars['String']>;
  filter: Maybe<Scalars['GenericScalar']>;
  region_id: Maybe<Scalars['String']>;
};


export type QueryProduct_Item_By_IdArgs = {
  product_item_id: Maybe<Scalars['String']>;
  product_slug: Maybe<Scalars['String']>;
  item_slug: Maybe<Scalars['String']>;
  static_params: Maybe<Scalars['GenericScalar']>;
  region_id: Maybe<Scalars['String']>;
};


export type QueryProduct_ItemsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  search: Maybe<Scalars['String']>;
  region_id: Maybe<Scalars['String']>;
};


export type QueryPaginated_Product_ItemsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  search: Maybe<Scalars['String']>;
  static_params: Maybe<Scalars['GenericScalar']>;
  region_id: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
};


export type QueryProduct_Uoms_By_Product_IdArgs = {
  product_id: Maybe<Scalars['String']>;
};


export type QueryUom_By_Product_Item_IdArgs = {
  product_item_id: Maybe<Scalars['String']>;
};


export type QueryUomsArgs = {
  filters: Maybe<Scalars['GenericScalar']>;
};


export type QueryUom_By_IdArgs = {
  uom_id: Maybe<Scalars['String']>;
};


export type QueryPricingArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
};


export type QueryPricing_By_IdArgs = {
  pricing_id: Maybe<Scalars['String']>;
};


export type QueryPricing_By_Product_Item_IdArgs = {
  product_item_id: Maybe<Scalars['String']>;
};


export type QueryVariant_By_IdArgs = {
  variant_id: Maybe<Scalars['String']>;
};


export type QueryProduct_VariantsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
};


export type QueryPackaging_UnitsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
};


export type QueryPackaging_Unit_By_IdArgs = {
  packaging_unit_id: Maybe<Scalars['String']>;
};


export type QueryReturn_ReasonsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
};


export type QueryReturn_Reason_By_IdArgs = {
  return_reason_id: Maybe<Scalars['String']>;
};


export type QueryProduct_CategoriesArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  region_id: Maybe<Scalars['String']>;
};


export type QueryProduct_Category_By_IdArgs = {
  category_id: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
};


export type QueryProduct_Categories_By_Department_IdArgs = {
  department_id: Maybe<Scalars['String']>;
};


export type QueryProduct_DepartmentsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
};


export type QueryProduct_Department_By_IdArgs = {
  department_id: Maybe<Scalars['String']>;
};


export type QueryRecommended_Product_ItemsArgs = {
  product_item_id: Maybe<Scalars['String']>;
  filter: Maybe<Scalars['GenericScalar']>;
  limit: Maybe<Scalars['Int']>;
  region_id: Maybe<Scalars['String']>;
};


export type QueryProduct_Items_By_IdsArgs = {
  active: Maybe<Scalars['Boolean']>;
  product_item_ids: Maybe<Array<Maybe<Scalars['String']>>>;
  static_params: Maybe<Scalars['GenericScalar']>;
  is_staff: Maybe<Scalars['Boolean']>;
  business_domain: Maybe<Scalars['String']>;
  region_id: Maybe<Scalars['String']>;
};


export type QueryBundle_Association_By_SkuArgs = {
  product_item_id: Maybe<Scalars['String']>;
};


export type QueryProduct_Item_SegmentsArgs = {
  filters: Maybe<Scalars['GenericScalar']>;
  search: Maybe<Scalars['String']>;
};


export type QueryProduct_Item_Segment_By_IdArgs = {
  product_item_segment_id: Maybe<Scalars['String']>;
};


export type QueryPricing_V2Args = {
  filter: Maybe<Scalars['GenericScalar']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
};


export type QueryPricing_V2_By_IdArgs = {
  pricing_id: Maybe<Scalars['String']>;
};


export type QueryPricing_V2_By_Product_Item_IdArgs = {
  product_item_id: Maybe<Scalars['String']>;
  region_id: Scalars['String'];
};


export type QueryPricing_V2_By_Region_IdArgs = {
  region_id: Maybe<Scalars['String']>;
};


export type QueryDynamic_PricingArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  valid_only: Maybe<Scalars['Boolean']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
};


export type QueryDynamic_Pricing_By_IdArgs = {
  dynamic_pricing_id: Maybe<Scalars['String']>;
};


export type QueryWork_OrdersArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryWork_Order_By_IdArgs = {
  work_order_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryWork_Order_Definition_By_IdArgs = {
  definition_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryWork_Order_ItemsArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryWork_Order_Item_By_IdArgs = {
  work_order_item_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryWork_Order_Reason_By_IdArgs = {
  reason_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryDelivery_ReturnsArgs = {
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
};


export type QueryDelivery_Return_By_IdArgs = {
  return_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryDelivery_Return_ItemsArgs = {
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
};


export type QueryDelivery_Return_Item_By_IdArgs = {
  return_item_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryOrder_ReturnsArgs = {
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
};


export type QueryOrder_Return_By_IdArgs = {
  return_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryOrder_Return_ItemsArgs = {
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
};


export type QueryOrder_Return_Item_By_IdArgs = {
  return_item_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QuerySales_Return_ReasonsArgs = {
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
};


export type QuerySales_Return_Reason_By_IdArgs = {
  reason_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryStock_NotificationsArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryStock_Notification_By_IdArgs = {
  stock_notification_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryPayment_Accounts_V2Args = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryPayment_Account_V2_By_IdArgs = {
  payment_account_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryRoute_Payment_Accounts_V2Args = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryRoute_Payment_Account_V2_By_IdArgs = {
  route_payment_account_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryRoute_Payment_Accounts_V2_By_Route_IdArgs = {
  route_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryPayments_V2Args = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryPayment_V2_By_IdArgs = {
  payment_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryDeliveries_V2Args = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryDelivery_V2_By_IdArgs = {
  delivery_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryDelivery_Fee_SchedulesArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryDelivery_Fee_Schedule_By_IdArgs = {
  schedule_id: Scalars['String'];
  active: Maybe<Scalars['Boolean']>;
};


export type QueryRealized_Revenue_V2Args = {
  route_id: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
};


export type QueryDelivery_Items_V2Args = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryDelivery_Item_V2_By_IdArgs = {
  delivery_item_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryShop_Delivery_Summary_V2Args = {
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
};


export type QueryDelivery_Product_Summary_V2Args = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryTrader_Entities_V2Args = {
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
};


export type QueryTrader_Entity_V2_By_IdArgs = {
  trader_entity_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryOrders_V2Args = {
  sort_order: Maybe<Scalars['Int']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryOrder_V2_By_IdArgs = {
  order_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryCurrent_Orders_V2Args = {
  shop_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryOrder_Items_V2Args = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryOrder_Item_V2_By_IdArgs = {
  order_item_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryOrder_Assignments_V2Args = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryOrder_Assignment_V2_By_IdArgs = {
  order_assignment_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryStock_Ordered_By_Product_ItemArgs = {
  product_item_id: Maybe<Scalars['String']>;
  region_id: Scalars['String'];
  sale_date: Maybe<Scalars['String']>;
};


export type QueryShop_Order_Summary_V2Args = {
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
};


export type QueryOrder_Product_Summary_V2Args = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryProjected_Revenue_V2Args = {
  route_id: Maybe<Scalars['String']>;
  sale_date: Maybe<Scalars['String']>;
};


export type QueryRoute_Plan_Order_SummaryArgs = {
  route_plan_id: Maybe<Scalars['String']>;
};


export type QueryRegions_V2Args = {
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
};


export type QueryRegion_V2_By_IdArgs = {
  region_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryAreas_V2Args = {
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
};


export type QueryArea_V2_By_IdArgs = {
  area_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryDepots_V2Args = {
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
};


export type QueryDepot_V2_By_IdArgs = {
  depot_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryRoutes_V2Args = {
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
};


export type QueryRoute_V2_By_IdArgs = {
  route_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryRoute_Teams_V2Args = {
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
};


export type QueryRoute_Team_V2_By_IdArgs = {
  route_team_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryRoute_Team_V2_By_User_IdArgs = {
  user_id: Maybe<Scalars['String']>;
  sale_date: Maybe<Scalars['String']>;
};


export type QueryRoute_Team_Members_V2Args = {
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
};


export type QueryRoute_Team_Member_V2_By_IdArgs = {
  route_team_member_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryCustomers_V2Args = {
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
};


export type QueryCustomer_V2_By_IdArgs = {
  customer_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryShops_V2Args = {
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  cordinates: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  business_domain: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
};


export type QueryShops_V2_By_Customer_IdArgs = {
  customer_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryShop_V2_By_IdArgs = {
  shop_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryShop_Types_V2Args = {
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  grouped: Maybe<Scalars['Boolean']>;
};


export type QueryShop_Type_V2_By_IdArgs = {
  shop_type_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryCustomer_Types_V2Args = {
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
};


export type QueryVendor_KycArgs = {
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
};


export type QueryVendor_Kyc_By_IdArgs = {
  vendor_kyc_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryCustomer_Type_V2_By_IdArgs = {
  customer_type_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryCustomer_V2_By_Phone_NumberArgs = {
  phone_number: Maybe<Scalars['String']>;
};


export type QueryVendor_Finance_PlansArgs = {
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
};


export type QueryDelivery_Fee_By_Shop_IdArgs = {
  shop_id: Scalars['String'];
};


export type QueryDispatchesArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter: Maybe<Scalars['GenericScalar']>;
  filter_array: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  return_all: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  search: Maybe<Scalars['String']>;
};


export type QueryDispatchArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter: Maybe<Scalars['GenericScalar']>;
  filter_array: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  return_all: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  search: Maybe<Scalars['String']>;
};


export type QueryDispatch_By_IdArgs = {
  dispatch_id: Maybe<Scalars['String']>;
};


export type QueryDispatch_By_Route_IdArgs = {
  route_id: Maybe<Scalars['String']>;
};


export type QueryDispatch_Item_By_IdArgs = {
  dispatch_item_id: Maybe<Scalars['String']>;
};


export type QueryDispatch_ItemsArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter: Maybe<Scalars['GenericScalar']>;
  filter_array: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  return_all: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  search: Maybe<Scalars['String']>;
};


export type QueryStock_TransfersArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter: Maybe<Scalars['GenericScalar']>;
  filter_array: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  return_all: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  search: Maybe<Scalars['String']>;
};


export type QueryStock_TransferArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter: Maybe<Scalars['GenericScalar']>;
  filter_array: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  return_all: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  search: Maybe<Scalars['String']>;
};


export type QueryStock_Transfer_By_IdArgs = {
  stock_transfer_id: Maybe<Scalars['String']>;
};


export type QueryStock_Transfer_Item_By_IdArgs = {
  stock_transfer_item: Maybe<Scalars['String']>;
};


export type QueryStock_Transfer_ItemsArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter: Maybe<Scalars['GenericScalar']>;
  filter_array: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  return_all: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  search: Maybe<Scalars['String']>;
};


export type QueryDispatch_BalanceArgs = {
  route_id: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
  product_item_id: Maybe<Scalars['String']>;
};


export type QueryDepot_IntakesArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter: Maybe<Scalars['GenericScalar']>;
  filter_array: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  return_all: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  search: Maybe<Scalars['String']>;
};


export type QueryDepot_IntakeArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter: Maybe<Scalars['GenericScalar']>;
  filter_array: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  return_all: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  search: Maybe<Scalars['String']>;
};


export type QueryDepot_Intake_By_IdArgs = {
  depot_intake_id: Maybe<Scalars['String']>;
};


export type QueryDepot_Intake_Item_By_IdArgs = {
  depot_intake_item_id: Maybe<Scalars['String']>;
};


export type QueryDepot_Intake_ItemsArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter: Maybe<Scalars['GenericScalar']>;
  filter_array: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  return_all: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  search: Maybe<Scalars['String']>;
};


export type QueryReturnsArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter: Maybe<Scalars['GenericScalar']>;
  filter_array: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  return_all: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  search: Maybe<Scalars['String']>;
};


export type QueryReturn_By_IdArgs = {
  return_id: Maybe<Scalars['String']>;
};


export type QueryProduct_Return_Item_By_IdArgs = {
  product_return_item_id: Maybe<Scalars['String']>;
};


export type QueryProduct_Return_ItemsArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter: Maybe<Scalars['GenericScalar']>;
  filter_array: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  return_all: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  search: Maybe<Scalars['String']>;
};


export type QueryPackaging_Return_Item_By_IdArgs = {
  packaging_return_item_id: Maybe<Scalars['String']>;
};


export type QueryPackaging_Return_ItemsArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter: Maybe<Scalars['GenericScalar']>;
  filter_array: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  return_all: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  search: Maybe<Scalars['String']>;
};


export type QueryDispatch_Product_Summary_V2Args = {
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter: Maybe<Scalars['GenericScalar']>;
  filter_array: Maybe<Scalars['GenericScalar']>;
  return_all: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  search: Maybe<Scalars['String']>;
};


export type QueryProjected_Ph_Revenue_V2Args = {
  route_id: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
};


export type QueryVehicle_Stock_AllocationsArgs = {
  filter: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_array: Maybe<Scalars['GenericScalar']>;
  return_all: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryVehicle_Stock_Allocation_By_IdArgs = {
  vehicle_stock_allocation_id: Maybe<Scalars['String']>;
};


export type QuerySokoloan_RepaymentsArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  filters: Maybe<Scalars['GenericScalar']>;
  since: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
};


export type QuerySokoloan_Repayment_By_IdArgs = {
  loan_confirmation_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryLead_CallbacksArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  filters: Maybe<Scalars['GenericScalar']>;
  since: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
};


export type QueryLead_Callback_By_IdArgs = {
  active: Maybe<Scalars['Boolean']>;
};


export type QueryFintech_LoansArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  filters: Maybe<Scalars['GenericScalar']>;
  since: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
};


export type QueryFintech_Loans_By_Customer_IdArgs = {
  customer_id: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  filters: Maybe<Scalars['GenericScalar']>;
  since: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
};


export type QueryFintech_Loan_By_IdArgs = {
  loan_confirmation_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryLoan_OffersArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  filters: Maybe<Scalars['GenericScalar']>;
  since: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
};


export type QueryLoan_Offer_By_Delivery_IdArgs = {
  delivery_id: Maybe<Scalars['String']>;
};


export type QueryLoan_Offer_By_IdArgs = {
  loan_offer_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryLoan_RequestsArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  filters: Maybe<Scalars['GenericScalar']>;
  since: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
};


export type QueryLoan_Request_By_IdArgs = {
  loan_offer_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryPartner_Loan_Query_By_Customer_IdArgs = {
  customer_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryFintech_DeliveriesArgs = {
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  since: Maybe<Scalars['String']>;
};


export type QueryFintech_Deliveries_By_Customer_IdArgs = {
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  customer_id: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  since: Maybe<Scalars['String']>;
};


export type QueryFintech_CustomersArgs = {
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
};


export type QueryFintech_Customer_By_IdArgs = {
  fintech_customer_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryFintech_PartnersArgs = {
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
};


export type QueryFintech_Partner_By_IdArgs = {
  partner_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryNotification_TemplatesArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  search: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
};


export type QueryNotification_Template_By_IdArgs = {
  notification_template_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryNotificationsArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  search: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
};


export type QueryNotification_By_IdArgs = {
  notification_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryNotification_Messages_By_User_IdArgs = {
  user_id: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  search: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
};


export type QueryNotification_ProvidersArgs = {
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_string: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  search: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  since: Maybe<Scalars['String']>;
};


export type QueryNotification_Provider_By_IdArgs = {
  provider_id: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryPermissions_V2Args = {
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
};


export type QueryPermission_V2_By_IdArgs = {
  permission_id: Maybe<Scalars['String']>;
};


export type QueryUsers_V2Args = {
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
};


export type QueryUser_V2_By_IdArgs = {
  user_id: Maybe<Scalars['String']>;
};


export type QueryUsers_V2_By_PermissionsArgs = {
  permissions: Maybe<Array<Maybe<Scalars['String']>>>;
  search: Maybe<Scalars['String']>;
};


export type QueryUser_V2_By_Id_Or_NumberArgs = {
  user_id_or_number: Maybe<Scalars['String']>;
};


export type QueryRoles_V2Args = {
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
};


export type QueryRole_V2_By_IdArgs = {
  role_id: Maybe<Scalars['String']>;
};


export type QueryVehicle_TypesArgs = {
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  since: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryVehicle_Type_By_IdArgs = {
  vehicle_type_id: Maybe<Scalars['String']>;
};


export type QueryVehiclesArgs = {
  search: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  available_on_delivery_date: Maybe<Scalars['Date']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  since: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryVehicle_By_IdArgs = {
  vehicle_id: Maybe<Scalars['String']>;
};


export type QueryRoute_PlansArgs = {
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  since: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryRoute_Plan_By_IdArgs = {
  route_plan_id: Maybe<Scalars['String']>;
};


export type QueryFulfillment_TeamsArgs = {
  since: Maybe<Scalars['String']>;
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryFulfillment_Team_By_IdArgs = {
  fulfillment_team_id: Maybe<Scalars['String']>;
};


export type QueryStatic_RoutesArgs = {
  filters: Maybe<Scalars['GenericScalar']>;
  filter_string: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  since: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
};


export type QueryStatic_Route_By_IdArgs = {
  static_route_id: Maybe<Scalars['String']>;
};


export type QueryDepot_Route_Plan_SummaryArgs = {
  depot_id: Maybe<Scalars['String']>;
  delivery_date: Maybe<Scalars['String']>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};


export type ProductLossReasonGqlConnection = {
  __typename?: 'ProductLossReasonGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductLossReasonGqlEdge>>;
};

/** Construct pagination info. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  current_page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  has_next: Maybe<Scalars['Boolean']>;
  has_previous: Maybe<Scalars['Boolean']>;
  total_pages: Maybe<Scalars['Int']>;
  total_count: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `ProductLossReasonGQL` and its cursor. */
export type ProductLossReasonGqlEdge = {
  __typename?: 'ProductLossReasonGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<ProductLossReasonGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ProductLossReasonGql = {
  __typename?: 'ProductLossReasonGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  product_loss_reason_id: Scalars['String'];
  loss_reason_id: Scalars['String'];
  product_id: Scalars['String'];
  loss_reason: Maybe<LossReasonGql>;
  product: Maybe<ProductGql>;
};



export type LossReasonGql = {
  __typename?: 'LossReasonGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  loss_reason_id: Scalars['String'];
  loss_reason: Scalars['String'];
  product_loss_reasons: Maybe<Array<Maybe<ProductLossReasonGql>>>;
};

export type ProductGql = {
  __typename?: 'ProductGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  product_id: Scalars['String'];
  product_name: Maybe<Scalars['String']>;
  product_code: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  product_description: Maybe<Scalars['String']>;
  category_id: Maybe<Scalars['String']>;
  vatable: Scalars['Boolean'];
  featured: Scalars['Boolean'];
  product_type: Maybe<Scalars['String']>;
  meta: Maybe<Scalars['JSONString']>;
  units_of_measure: Maybe<Array<Maybe<ProductUomgql>>>;
  product_items: Maybe<Array<Maybe<ProductItemGql>>>;
  product_images: Maybe<Array<Maybe<ProductImageGql>>>;
  domain_activations: Maybe<Array<Maybe<ProductDomainActivationGql>>>;
  variants: Maybe<Array<Maybe<VariantGql>>>;
  category: Maybe<CategoryGql>;
  packaging_units: Maybe<Array<Maybe<PackagingUnitGql>>>;
  categories: Maybe<Array<Maybe<CategoryGql>>>;
  product_tags: Maybe<Array<Maybe<ProductTagGql>>>;
  sourcing_price_range: Maybe<PriceRangeGql>;
};

export type ProductUomgql = {
  __typename?: 'ProductUOMGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  product_uom_id: Scalars['String'];
  product_id: Scalars['String'];
  uom_id: Scalars['String'];
  business_domain: Scalars['String'];
  uom: Maybe<Uomgql>;
  domain: Maybe<Scalars['String']>;
};

export type Uomgql = {
  __typename?: 'UOMGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  uom_id: Scalars['String'];
  name: Scalars['String'];
  abbreviation: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  uom: Maybe<ProductItemUomgql>;
};

export type ProductItemUomgql = {
  __typename?: 'ProductItemUOMGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  product_item_uom_id: Scalars['String'];
  product_item_id: Scalars['String'];
  uom_id: Scalars['String'];
  business_domain: Scalars['String'];
  conversion_ratio: Scalars['Float'];
  uom: Maybe<Uomgql>;
  domain: Maybe<Scalars['String']>;
};

export type ProductItemGql = {
  __typename?: 'ProductItemGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  product_item_id: Scalars['String'];
  product_item_name: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  product_id: Maybe<Scalars['String']>;
  image: Maybe<Scalars['String']>;
  image_url: Maybe<Scalars['String']>;
  staff_only: Scalars['Boolean'];
  description: Maybe<Scalars['String']>;
  meta: Maybe<Scalars['JSONString']>;
  featured: Scalars['Boolean'];
  packed_weight: Scalars['Float'];
  packed_volume: Scalars['Float'];
  supplier_item: Scalars['Boolean'];
  product_item_segment_id: Maybe<Scalars['String']>;
  whitelisted_routes: Maybe<Array<Maybe<Scalars['String']>>>;
  blacklisted_routes: Maybe<Array<Maybe<Scalars['String']>>>;
  units_of_measure: Maybe<Array<Maybe<ProductItemUomgql>>>;
  domain_activations: Maybe<Array<Maybe<ProductItemDomainActivationGql>>>;
  product: Maybe<ProductGql>;
  product_item_segment: Maybe<ProductItemSegmentGql>;
  regions: Maybe<Array<Maybe<ProductItemRegionGql>>>;
  pricing: Maybe<Array<Maybe<PricingGql>>>;
  current_pricing: Maybe<PricingGql>;
  base_price: Maybe<Scalars['Float']>;
  dynamic_price: Maybe<Scalars['Float']>;
  current_pricing_v2: Maybe<PricingV2Gql>;
  current_stock_availability: Maybe<StockAvailabilityGqLv2>;
  ordered_stock: Maybe<StockOrderedGql>;
  inventory: Maybe<InventoryGql>;
};


export type ProductItemGqlCurrent_Pricing_V2Args = {
  region_id: Scalars['String'];
};


export type ProductItemGqlCurrent_Stock_AvailabilityArgs = {
  region_id: Scalars['String'];
};


export type ProductItemGqlOrdered_StockArgs = {
  region_id: Scalars['String'];
};


export type ProductItemGqlInventoryArgs = {
  distribution_center_id: Scalars['String'];
};

export type ProductItemDomainActivationGql = {
  __typename?: 'ProductItemDomainActivationGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  product_item_domain_activation_id: Scalars['String'];
  product_item_id: Maybe<Scalars['String']>;
  business_domain: Scalars['String'];
  product_item: Maybe<ProductItemGql>;
  domain: Maybe<Scalars['String']>;
};

export type ProductItemSegmentGql = {
  __typename?: 'ProductItemSegmentGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  product_item_segment_id: Scalars['String'];
  segment_name: Scalars['String'];
  description: Maybe<Scalars['String']>;
  meta: Maybe<Scalars['JSONString']>;
};

export type ProductItemRegionGql = {
  __typename?: 'ProductItemRegionGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  product_item_region_id: Scalars['String'];
  product_item_id: Scalars['String'];
  region_id: Scalars['String'];
  product_item: Maybe<ProductItemGql>;
  region: Maybe<RegionV2Gql>;
};

/** Region GQL. */
export type RegionV2Gql = {
  __typename?: 'RegionV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  region_id: Scalars['String'];
  region_name: Maybe<Scalars['String']>;
  regional_manager: Maybe<Scalars['String']>;
  areas: Maybe<Array<Maybe<AreaV2Gql>>>;
};

/** Area GQL. */
export type AreaV2Gql = {
  __typename?: 'AreaV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  area_id: Scalars['String'];
  region_id: Scalars['String'];
  area_name: Maybe<Scalars['String']>;
  area_manager: Maybe<Scalars['String']>;
  region: Maybe<RegionV2Gql>;
  depots: Maybe<Array<Maybe<DepotV2Gql>>>;
};

/** Depot GQL. */
export type DepotV2Gql = {
  __typename?: 'DepotV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  depot_id: Scalars['String'];
  area_id: Maybe<Scalars['String']>;
  depot_name: Maybe<Scalars['String']>;
  area_sales_manager: Maybe<Scalars['String']>;
  depot_clerk: Maybe<Scalars['String']>;
  latitude: Maybe<Scalars['Float']>;
  longitude: Maybe<Scalars['Float']>;
  depot_fulfillment_officer: Maybe<Scalars['String']>;
  area: Maybe<AreaV2Gql>;
  routes: Maybe<Array<Maybe<RouteV2Gql>>>;
  user: Maybe<UserV2Gql>;
  clerk: Maybe<UserV2Gql>;
  dfo: Maybe<UserV2Gql>;
  route_plan_summary: Maybe<DepotRoutePlanSummaryGql>;
};


/** Depot GQL. */
export type DepotV2GqlRoute_Plan_SummaryArgs = {
  delivery_date: Scalars['String'];
};

/** Route GQL. */
export type RouteV2Gql = {
  __typename?: 'RouteV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  route_id: Scalars['String'];
  depot_id: Scalars['String'];
  route_name: Maybe<Scalars['String']>;
  route_type: Maybe<Scalars['String']>;
  depot: Maybe<DepotV2Gql>;
  payment_accounts: Maybe<Array<Maybe<RoutePaymentAccountV2Gql>>>;
};

export type RoutePaymentAccountV2Gql = {
  __typename?: 'RoutePaymentAccountV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  route_payment_account_id: Scalars['String'];
  route_id: Scalars['String'];
  payment_account_id: Scalars['String'];
  route: Maybe<RouteV2Gql>;
  payment_account: Maybe<PaymentAccountV2Gql>;
};

export type PaymentAccountV2Gql = {
  __typename?: 'PaymentAccountV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  payment_account_id: Scalars['String'];
  account_number: Scalars['String'];
  account_type: Maybe<PaymentAccountTypeEnum>;
  account_details: Maybe<Scalars['String']>;
  account_name: Maybe<Scalars['String']>;
};

/** Payment Account Type */
export enum PaymentAccountTypeEnum {
  Mpesa = 'MPESA',
  Bank = 'BANK'
}

export type UserV2Gql = {
  __typename?: 'UserV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Scalars['String'];
  client_timestamp: Scalars['DateTime'];
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  user_id: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  user_number: Scalars['String'];
  phone_number: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  primary_role_id: Scalars['String'];
  last_login: Maybe<Scalars['DateTime']>;
  domain: Scalars['String'];
  region_id: Maybe<Scalars['String']>;
  primary_role: Maybe<RoleV2Gql>;
  roles: Maybe<Array<Maybe<RoleV2Gql>>>;
  permissions: Maybe<Array<Maybe<PermissionV2Gql>>>;
  permissions_blacklist: Maybe<Array<Maybe<PermissionV2Gql>>>;
  user_no: Maybe<Scalars['Int']>;
  region: Maybe<RegionV2Gql>;
};

export type RoleV2Gql = {
  __typename?: 'RoleV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Scalars['String'];
  client_timestamp: Scalars['DateTime'];
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  role_id: Scalars['String'];
  role_name: Scalars['String'];
  domain: Scalars['String'];
  permissions: Maybe<Array<Maybe<PermissionV2Gql>>>;
};

export type PermissionV2Gql = {
  __typename?: 'PermissionV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Scalars['String'];
  client_timestamp: Scalars['DateTime'];
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  permission_id: Scalars['String'];
  permission_name: Scalars['String'];
  domain: Scalars['String'];
  roles: Maybe<Array<Maybe<RoleV2Gql>>>;
};

export type DepotRoutePlanSummaryGql = {
  __typename?: 'DepotRoutePlanSummaryGQL';
  planned_orders: Maybe<Scalars['Int']>;
  vehicles: Maybe<Scalars['Int']>;
};

/** Pricing GQL schema. */
export type PricingGql = {
  __typename?: 'PricingGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  pricing_id: Scalars['String'];
  product_item_id: Maybe<Scalars['String']>;
  date: Scalars['String'];
  unit_price: Scalars['Float'];
  unit_name: Scalars['String'];
  unit_of_measure: Maybe<Scalars['String']>;
  product_item: Maybe<ProductItemGql>;
};

/** PricingV2GQL type. */
export type PricingV2Gql = Node & {
  __typename?: 'PricingV2GQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  pricing_id: Scalars['String'];
  product_item_id: Scalars['String'];
  unit_of_measure_id: Scalars['String'];
  pricing_date: Scalars['String'];
  base_price: Scalars['Float'];
  rrp: Scalars['Float'];
  region_id: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  uom: Maybe<Uomgql>;
  product_item: Maybe<ProductItemGql>;
  user: Maybe<UserV2Gql>;
};

export type StockAvailabilityGqLv2 = Node & {
  __typename?: 'StockAvailabilityGQLv2';
  region_id: Maybe<Scalars['String']>;
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  stock_availability_id: Scalars['String'];
  sale_date: Scalars['String'];
  stock_entry_number: Scalars['String'];
  product_item_id: Scalars['String'];
  quantity: Maybe<Scalars['Float']>;
  unit_of_measure_id: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
  product_item: Maybe<ProductItemGql>;
  uom: Maybe<Uomgql>;
  user: Maybe<UserV2Gql>;
  ordered_stock: Maybe<StockOrderedGql>;
  region: Maybe<RegionV2Gql>;
};

/** Return total ordered volume for an item. */
export type StockOrderedGql = {
  __typename?: 'StockOrderedGQL';
  product_item_id: Maybe<Scalars['String']>;
  region_id: Maybe<Scalars['String']>;
  order_quantity: Maybe<Scalars['Float']>;
  order_weight: Maybe<Scalars['Float']>;
};

export type InventoryGql = {
  __typename?: 'InventoryGQL';
  storage_quantity: Maybe<Scalars['Float']>;
  storage_weight: Maybe<Scalars['Float']>;
  packaging_unit_quantity: Maybe<Scalars['Float']>;
  inventory_quantity: Maybe<Scalars['Float']>;
  verified_quantity: Maybe<Scalars['Float']>;
  distribution_center_id: Maybe<Scalars['String']>;
};

export type ProductImageGql = {
  __typename?: 'ProductImageGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  product_image_id: Scalars['String'];
  product_id: Maybe<Scalars['String']>;
  height: Scalars['Int'];
  width: Scalars['Int'];
  file_path: Scalars['String'];
  public_url: Scalars['String'];
};

export type ProductDomainActivationGql = {
  __typename?: 'ProductDomainActivationGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  product_domain_activation_id: Scalars['String'];
  product_id: Maybe<Scalars['String']>;
  business_domain: Scalars['String'];
  domain: Maybe<Scalars['String']>;
};

/** Variant GQL schema. */
export type VariantGql = {
  __typename?: 'VariantGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  variant_id: Scalars['String'];
  variant_name: Maybe<Scalars['String']>;
};

export type CategoryGql = {
  __typename?: 'CategoryGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  category_id: Scalars['String'];
  category_name: Scalars['String'];
  slug: Scalars['String'];
  image: Maybe<Scalars['String']>;
  image_url: Maybe<Scalars['String']>;
  banner_image: Maybe<Scalars['String']>;
  banner_image_url: Maybe<Scalars['String']>;
  department_id: Scalars['String'];
  featured: Scalars['Boolean'];
  department: Maybe<DepartmentGql>;
  products: Maybe<Array<Maybe<ProductGql>>>;
  regions: Maybe<Array<Maybe<CategoryRegionGql>>>;
};

export type DepartmentGql = {
  __typename?: 'DepartmentGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  department_id: Scalars['String'];
  department_name: Scalars['String'];
  slug: Scalars['String'];
  short_name: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  image: Maybe<Scalars['String']>;
  image_url: Maybe<Scalars['String']>;
  featured: Scalars['Boolean'];
  categories: Maybe<Array<Maybe<CategoryGql>>>;
};

export type CategoryRegionGql = {
  __typename?: 'CategoryRegionGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  category_region_id: Scalars['String'];
  category_id: Scalars['String'];
  region_id: Scalars['String'];
  category: Maybe<CategoryGql>;
  region: Maybe<RegionV2Gql>;
};

/** Packaging Unit GQL schema. */
export type PackagingUnitGql = {
  __typename?: 'PackagingUnitGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  packaging_unit_id: Scalars['String'];
  name: Scalars['String'];
  returnable: Scalars['Boolean'];
  weight: Scalars['Float'];
};

export type ProductTagGql = {
  __typename?: 'ProductTagGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  product_tag_id: Scalars['String'];
  product_id: Maybe<Scalars['String']>;
  product_tag: Scalars['String'];
  product: Maybe<ProductGql>;
};

export type PriceRangeGql = {
  __typename?: 'PriceRangeGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  price_range_id: Scalars['String'];
  product_id: Scalars['String'];
  client_stamp: Scalars['String'];
  min_price: Scalars['Float'];
  max_price: Scalars['Float'];
};

export type StorageUnitTypeGql = {
  __typename?: 'StorageUnitTypeGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  storage_unit_type_id: Scalars['String'];
  storage_unit_type: Scalars['String'];
  storage_units: Maybe<Array<Maybe<StorageUnitGql>>>;
};

export type StorageUnitGql = {
  __typename?: 'StorageUnitGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  storage_unit_id: Scalars['String'];
  storage_unit_type_id: Scalars['String'];
  unit_name: Scalars['String'];
  warehouse_id: Scalars['String'];
  warehouse: Maybe<WarehouseGql>;
  storage_unit_type: Maybe<StorageUnitTypeGql>;
  storages: Maybe<Array<Maybe<StorageGql>>>;
};

export type WarehouseGql = {
  __typename?: 'WarehouseGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  warehouse_id: Scalars['String'];
  warehouse_name: Scalars['String'];
  distribution_center_id: Maybe<Scalars['String']>;
  storage_units: Maybe<Array<Maybe<StorageUnitGql>>>;
  distribution_center: Maybe<DistributionCenterGql>;
};

export type DistributionCenterGql = {
  __typename?: 'DistributionCenterGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  distribution_center_id: Scalars['String'];
  distribution_center_name: Scalars['String'];
  description: Maybe<Scalars['String']>;
  warehouses: Maybe<Array<Maybe<WarehouseGql>>>;
  intakes: Maybe<Array<Maybe<StockIntakeGql>>>;
  stock_counts: Maybe<Array<Maybe<StockTakeGql>>>;
  processing_losses: Maybe<Array<Maybe<ProcessingLossGql>>>;
};

export type StockIntakeGql = {
  __typename?: 'StockIntakeGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  stock_intake_id: Scalars['String'];
  stock_intake_number: Scalars['String'];
  arrival_date: Scalars['DateTime'];
  truck_number: Scalars['String'];
  cancellation_reason: Maybe<Scalars['String']>;
  distribution_center_id: Maybe<Scalars['String']>;
  intake_count: Maybe<Scalars['Int']>;
  stock_intake_items: Maybe<Array<Maybe<StockIntakeItemGql>>>;
  stock_intake_photos: Maybe<Array<Maybe<StockIntakePhotoGql>>>;
  distribution_center: Maybe<DistributionCenterGql>;
  user: Maybe<UserV2Gql>;
};

export type StockIntakeItemGql = {
  __typename?: 'StockIntakeItemGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  stock_intake_item_id: Scalars['String'];
  stock_intake_id: Scalars['String'];
  batch_id: Scalars['String'];
  product_id: Scalars['String'];
  product_item_id: Scalars['String'];
  quantity: Scalars['Float'];
  weight: Scalars['Float'];
  unit_of_measure_id: Scalars['String'];
  packaging_unit_id: Maybe<Scalars['String']>;
  packaging_unit_quantity: Maybe<Scalars['Int']>;
  gross_weight: Maybe<Scalars['Float']>;
  pallet_weight: Scalars['Float'];
  cancellation_reason: Maybe<Scalars['String']>;
  stock_intake: Maybe<StockIntakeGql>;
  product: Maybe<ProductGql>;
  product_item: Maybe<ProductItemGql>;
  uom: Maybe<Uomgql>;
  packaging_unit: Maybe<PackagingUnitGql>;
  user: Maybe<UserV2Gql>;
  batch: Maybe<BatchGql>;
};

export type BatchGql = {
  __typename?: 'BatchGQL';
  field_weight: Maybe<Scalars['Float']>;
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  batch_id: Scalars['String'];
  batch_name: Scalars['String'];
  batch_date: Scalars['String'];
  collection_center_id: Maybe<Scalars['String']>;
  area_id: Maybe<Scalars['String']>;
  lpo_number: Maybe<Scalars['String']>;
  farmer_code: Maybe<Scalars['String']>;
  harvests: Maybe<Array<Maybe<HarvestGql>>>;
  area: Maybe<AreaGql>;
  collection_center: Maybe<CollectionCenterGql>;
  intake_weight: Maybe<Scalars['Float']>;
  processing_loss_weight: Maybe<Scalars['Float']>;
  stock_intake_items: Maybe<Array<Maybe<StockIntakeItemGql>>>;
};

export type HarvestGql = {
  __typename?: 'HarvestGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  cancelled: Scalars['Boolean'];
  cancellation_reason: Maybe<Scalars['String']>;
  harvest_id: Scalars['String'];
  collection_center_id: Scalars['String'];
  farm_id: Maybe<Scalars['String']>;
  farmer_id: Maybe<Scalars['String']>;
  batch_id: Maybe<Scalars['String']>;
  product_id: Maybe<Scalars['String']>;
  product_item_id: Maybe<Scalars['String']>;
  unit_of_measure_id: Maybe<Scalars['String']>;
  receipt_number: Scalars['String'];
  receipt_url: Maybe<Scalars['String']>;
  unit_price: Maybe<Scalars['Float']>;
  original_currency: Scalars['String'];
  fx_rate: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
  weight: Maybe<Scalars['Float']>;
  total_payable: Maybe<Scalars['Float']>;
  harvest_date: Scalars['String'];
  harvested_by: Maybe<Scalars['String']>;
  packaging_unit_id: Maybe<Scalars['String']>;
  packaging_unit_quantity: Maybe<Scalars['Int']>;
  invoice_number: Maybe<Scalars['String']>;
  farm: Maybe<FarmGql>;
  collection_center: Maybe<CollectionCenterGql>;
  harvest_issues: Maybe<HarvestIssueGql>;
  batch: Maybe<BatchGql>;
  farmer: Maybe<FarmerGql>;
  harvest_items: Maybe<Array<Maybe<HarvestItemGql>>>;
  harvest_payment_batch_detail: Maybe<PaymentDetailGql>;
  payment: Maybe<HarvestPaymentGql>;
  signed_receipt_url: Maybe<Scalars['String']>;
  product: Maybe<ProductGql>;
  harvester: Maybe<UserV2Gql>;
  packaging_unit: Maybe<PackagingUnitGql>;
  uom: Maybe<Uomgql>;
  product_item: Maybe<ProductItemGql>;
};

export type FarmGql = Node & {
  __typename?: 'FarmGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  farm_id: Scalars['String'];
  farm_number: Scalars['Int'];
  farm_name: Maybe<Scalars['String']>;
  farmer_type: Scalars['String'];
  farm_size: Scalars['Float'];
  farmer_id: Scalars['String'];
  latitude: Maybe<Scalars['Float']>;
  longitude: Maybe<Scalars['Float']>;
  harvest_area_id: Scalars['String'];
  agent_farm: Maybe<Scalars['Boolean']>;
  products: Maybe<Array<Maybe<FarmProductGql>>>;
  farmer: Maybe<FarmerGql>;
  harvest_area: Maybe<HarvestAreaGql>;
  harvest: Maybe<HarvestGql>;
  booking: Maybe<BookingGql>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type FarmProductGql = Node & {
  __typename?: 'FarmProductGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  farm_product_id: Scalars['String'];
  product_id: Scalars['String'];
  farm_id: Scalars['String'];
  farm: Maybe<FarmGql>;
  /** The ID of the object. */
  id: Scalars['ID'];
  product: Maybe<ProductGql>;
};

export type FarmerGql = Node & {
  __typename?: 'FarmerGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  farmer_id: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  farmer_number: Scalars['Int'];
  phone_number: Scalars['String'];
  alt_phone_number: Maybe<Scalars['String']>;
  farmer_type: Maybe<Scalars['String']>;
  supplier_name: Maybe<Scalars['String']>;
  email_address: Maybe<Scalars['String']>;
  discovery_id: Maybe<Scalars['String']>;
  discovery_other: Maybe<Scalars['String']>;
  locale: Scalars['String'];
  farmer_payment_accounts: Maybe<Array<Maybe<FarmerPaymentAccountGql>>>;
  agent: Maybe<SourcingAgentGql>;
  discovery: Maybe<DiscoveryGql>;
  supplier_products: Maybe<Array<Maybe<SupplierProductGql>>>;
  supplier_users: Maybe<Array<Maybe<SupplierUserGql>>>;
  farms: Maybe<Array<Maybe<FarmGql>>>;
  harvests: Maybe<HarvestGql>;
  harvest_payment_batch_detail: Maybe<PaymentDetailGql>;
  bookings: Maybe<BookingGql>;
  /** The ID of the object. */
  id: Scalars['ID'];
  primary_payment_account: Maybe<FarmerPaymentAccountGql>;
  batch_code: Maybe<Scalars['String']>;
};

export type FarmerPaymentAccountGql = Node & {
  __typename?: 'FarmerPaymentAccountGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  farmer_payment_account_id: Scalars['String'];
  farmer_id: Scalars['String'];
  account_type: Maybe<Scalars['String']>;
  party: Scalars['String'];
  party_code: Maybe<Scalars['String']>;
  account_number: Scalars['String'];
  account_name: Scalars['String'];
  is_primary: Scalars['Boolean'];
  farmer_payment_accounts: Maybe<FarmerGql>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type SourcingAgentGql = {
  __typename?: 'SourcingAgentGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  agent_id: Scalars['String'];
  farmer_id: Scalars['String'];
  user_name: Scalars['String'];
  password: Scalars['String'];
  last_login: Maybe<Scalars['DateTime']>;
  locale: Scalars['String'];
  farmer: Maybe<FarmerGql>;
  agent: Maybe<BidApplicationGql>;
  products: Maybe<Array<Maybe<Scalars['GenericScalar']>>>;
};

export type BidApplicationGql = {
  __typename?: 'BidApplicationGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  bid_application_id: Scalars['String'];
  bid_id: Scalars['String'];
  bid_application_number: Scalars['String'];
  farmer_id: Scalars['String'];
  agent_id: Scalars['String'];
  bid_application_date: Scalars['DateTime'];
  delivery_date: Scalars['DateTime'];
  product_id: Scalars['String'];
  product_item_id: Maybe<Scalars['String']>;
  unit_of_measure_id: Scalars['String'];
  quantity: Scalars['Float'];
  unit_price: Scalars['Float'];
  original_currency: Scalars['String'];
  fx_rate: Maybe<Scalars['Float']>;
  bid_application_status: Maybe<Scalars['String']>;
  cancellation_reason: Maybe<Scalars['String']>;
  vehicle_registration: Maybe<Scalars['String']>;
  bid_application_status_type: Maybe<Scalars['String']>;
  latitude: Maybe<Scalars['Float']>;
  longitude: Maybe<Scalars['Float']>;
  bid: Maybe<BidGql>;
  agent: Maybe<SourcingAgentGql>;
  agent_feedback: Maybe<Array<Maybe<AgentFeedbackGql>>>;
  product: Maybe<ProductGql>;
  uom: Maybe<Uomgql>;
  farmer: Maybe<FarmerGql>;
  product_item: Maybe<ProductItemGql>;
};

export type BidGql = {
  __typename?: 'BidGQL';
  bid_application_count: Maybe<Scalars['Int']>;
  bid_application_lowest_price: Maybe<Scalars['Float']>;
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  bid_id: Scalars['String'];
  bid_number: Scalars['String'];
  opening_bid_price: Scalars['Float'];
  minimum_quantity: Scalars['Float'];
  product_id: Scalars['String'];
  product_item_id: Maybe<Scalars['String']>;
  unit_of_measure_id: Scalars['String'];
  quantity: Scalars['Float'];
  opening_date: Scalars['DateTime'];
  closing_date: Scalars['DateTime'];
  delivery_date: Scalars['DateTime'];
  bid_notes: Maybe<Scalars['String']>;
  bid_status: Maybe<Scalars['String']>;
  cancellation_reason: Maybe<Scalars['String']>;
  bid_applications: Maybe<Array<Maybe<BidApplicationGql>>>;
  product: Maybe<ProductGql>;
  uom: Maybe<Uomgql>;
  user: Maybe<UserV2Gql>;
  product_item: Maybe<ProductItemGql>;
};

export type AgentFeedbackGql = {
  __typename?: 'AgentFeedbackGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  agent_feedback_id: Scalars['String'];
  agent_id: Scalars['String'];
  harvest_id: Scalars['String'];
  bid_application_id: Scalars['String'];
  delivery_id: Maybe<Scalars['String']>;
  comment: Maybe<Scalars['String']>;
  rating: Scalars['Int'];
  categories: Maybe<Array<Maybe<FeedbackCategoryGql>>>;
  bid_application: Maybe<BidApplicationGql>;
};

export type FeedbackCategoryGql = {
  __typename?: 'FeedbackCategoryGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  feedback_category_id: Scalars['String'];
  feedback_category_name: Scalars['String'];
  feedback_category_description: Maybe<Scalars['String']>;
};

export type DiscoveryGql = {
  __typename?: 'DiscoveryGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  discovery_id: Scalars['String'];
  method: Scalars['String'];
};

export type SupplierProductGql = {
  __typename?: 'SupplierProductGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  supplier_product_id: Scalars['String'];
  farmer_id: Scalars['String'];
  product_id: Scalars['String'];
  supplier: Maybe<FarmerGql>;
  product: Maybe<ProductGql>;
};

export type SupplierUserGql = {
  __typename?: 'SupplierUserGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  supplier_user_id: Scalars['String'];
  farmer_id: Scalars['String'];
  user_id: Scalars['String'];
  role_id: Scalars['String'];
  supplier: Maybe<FarmerGql>;
  user: Maybe<UserV2Gql>;
  role: Maybe<RoleV2Gql>;
};

export type PaymentDetailGql = Node & {
  __typename?: 'PaymentDetailGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  harvest_payment_batch_detail_id: Scalars['String'];
  harvest_payment_batch_id: Scalars['String'];
  harvest_id: Scalars['String'];
  amount: Scalars['Float'];
  farmer_payment_account_id: Scalars['String'];
  farmer_id: Scalars['String'];
  account_type: Maybe<Scalars['String']>;
  account_number: Scalars['String'];
  payment_provider_mode_id: Scalars['String'];
  payment_transaction_type: Maybe<Scalars['String']>;
  payment_status: Maybe<Scalars['String']>;
  external_payment_transaction_id: Maybe<Scalars['String']>;
  external_payment_date: Maybe<Scalars['DateTime']>;
  harvest: Maybe<HarvestGql>;
  farmer: Maybe<FarmerGql>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type BookingGql = Node & {
  __typename?: 'BookingGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  cancelled: Scalars['Boolean'];
  cancellation_reason: Maybe<Scalars['String']>;
  booking_id: Scalars['String'];
  receipt_number: Scalars['String'];
  farm_id: Maybe<Scalars['String']>;
  farmer_id: Maybe<Scalars['String']>;
  collection_center_id: Scalars['String'];
  product_id: Maybe<Scalars['String']>;
  product_item_id: Maybe<Scalars['String']>;
  unit_of_measure_id: Maybe<Scalars['String']>;
  quantity: Maybe<Scalars['Float']>;
  weight: Maybe<Scalars['Float']>;
  price: Maybe<Scalars['Float']>;
  original_currency: Scalars['String'];
  fx_rate: Maybe<Scalars['Float']>;
  invoice_url: Maybe<Scalars['String']>;
  booking_date: Scalars['String'];
  harvest_date: Maybe<Scalars['String']>;
  booked_by: Maybe<Scalars['String']>;
  invoice_number: Maybe<Scalars['String']>;
  farm: Maybe<FarmGql>;
  collection_center: Maybe<CollectionCenterGql>;
  booking_items: Maybe<Array<Maybe<BookingItemGql>>>;
  farmer: Maybe<FarmerGql>;
  /** The ID of the object. */
  id: Scalars['ID'];
  signed_invoice_url: Maybe<Scalars['String']>;
  product: Maybe<ProductGql>;
  scout: Maybe<UserV2Gql>;
  uom: Maybe<Uomgql>;
  product_item: Maybe<ProductItemGql>;
};

export type CollectionCenterGql = Node & {
  __typename?: 'CollectionCenterGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  collection_center_id: Scalars['String'];
  collection_center_name: Scalars['String'];
  area_id: Scalars['String'];
  latitude: Maybe<Scalars['Float']>;
  longitude: Maybe<Scalars['Float']>;
  collection_center_supervisor: Maybe<Scalars['String']>;
  collection_center_code: Maybe<Scalars['String']>;
  harvest_areas: Maybe<Array<Maybe<HarvestAreaGql>>>;
  harvest: Maybe<HarvestGql>;
  area: Maybe<AreaGql>;
  booking: Maybe<BookingGql>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type HarvestAreaGql = Node & {
  __typename?: 'HarvestAreaGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  harvest_area_id: Scalars['String'];
  harvest_area_name: Scalars['String'];
  collection_center_id: Scalars['String'];
  collection_center: Maybe<CollectionCenterGql>;
  /** The ID of the object. */
  id: Scalars['ID'];
  area: Maybe<AreaGql>;
};

export type AreaGql = Node & {
  __typename?: 'AreaGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  area_id: Scalars['String'];
  area_name: Scalars['String'];
  area_manager: Maybe<Scalars['String']>;
  area_code: Maybe<Scalars['String']>;
  collection_centers: Maybe<Array<Maybe<CollectionCenterGql>>>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type BookingItemGql = {
  __typename?: 'BookingItemGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  cancelled: Scalars['Boolean'];
  cancellation_reason: Maybe<Scalars['String']>;
  booking_item_id: Scalars['String'];
  booking_id: Scalars['String'];
  product_id: Scalars['String'];
  product_item_id: Maybe<Scalars['String']>;
  unit_of_measure_id: Scalars['String'];
  quantity: Scalars['Float'];
  weight: Maybe<Scalars['Float']>;
  unit_price: Scalars['Float'];
  harvest_date: Scalars['String'];
  booked_by: Maybe<Scalars['String']>;
  booking: Maybe<BookingGql>;
  product: Maybe<ProductGql>;
  scout: Maybe<UserV2Gql>;
  uom: Maybe<Uomgql>;
  product_item: Maybe<ProductItemGql>;
};

export type HarvestIssueGql = Node & {
  __typename?: 'HarvestIssueGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  harvest_issue_id: Scalars['String'];
  harvest_id: Scalars['String'];
  comment: Maybe<Scalars['String']>;
  harvest_issue_types: Maybe<Array<Maybe<HarvestIssueDetailGql>>>;
  harvest: Maybe<HarvestGql>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type HarvestIssueDetailGql = Node & {
  __typename?: 'HarvestIssueDetailGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  harvest_issue_detail_id: Scalars['String'];
  harvest_issue_type_id: Scalars['Int'];
  harvest_issue_id: Scalars['String'];
  harvest_issue_type: Maybe<HarvestIssueTypeGql>;
  harvest_issue: Maybe<HarvestIssueGql>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type HarvestIssueTypeGql = Node & {
  __typename?: 'HarvestIssueTypeGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  harvest_issue_type_id: Scalars['ID'];
  harvest_issue_type_name: Scalars['String'];
  harvest_issue_detail: Maybe<HarvestIssueDetailGql>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type HarvestItemGql = {
  __typename?: 'HarvestItemGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  cancelled: Scalars['Boolean'];
  cancellation_reason: Maybe<Scalars['String']>;
  harvest_item_id: Scalars['String'];
  harvest_id: Scalars['String'];
  product_id: Scalars['String'];
  product_item_id: Maybe<Scalars['String']>;
  unit_of_measure_id: Scalars['String'];
  unit_price: Scalars['Float'];
  quantity: Scalars['Float'];
  weight: Scalars['Float'];
  total_payable: Scalars['Float'];
  packaging_unit_id: Maybe<Scalars['String']>;
  packaging_unit_quantity: Maybe<Scalars['Int']>;
  harvest: Maybe<HarvestGql>;
  product: Maybe<ProductGql>;
  harvester: Maybe<UserV2Gql>;
  packaging_unit: Maybe<PackagingUnitGql>;
  uom: Maybe<Uomgql>;
  product_item: Maybe<ProductItemGql>;
};

export type HarvestPaymentGql = {
  __typename?: 'HarvestPaymentGQL';
  harvest_id: Maybe<Scalars['String']>;
  amount_paid: Maybe<Scalars['Float']>;
  total_payable: Maybe<Scalars['Float']>;
  harvest_payment_status: Maybe<Scalars['String']>;
  payment_details: Maybe<Array<Maybe<HarvestPaymentDetailGql>>>;
};

export type HarvestPaymentDetailGql = {
  __typename?: 'HarvestPaymentDetailGQL';
  amount: Maybe<Scalars['Float']>;
  payment_date: Maybe<Scalars['String']>;
  account_type: Maybe<Scalars['String']>;
  account_number: Maybe<Scalars['String']>;
  harvest_id: Maybe<Scalars['String']>;
  transaction_id: Maybe<Scalars['String']>;
  payment_status: Maybe<Scalars['String']>;
  date_created: Maybe<Scalars['String']>;
  payer_name: Maybe<Scalars['String']>;
  harvest_payment_batch_id: Maybe<Scalars['String']>;
  harvest_payment_batch_detail_id: Maybe<Scalars['String']>;
};

export type StockIntakePhotoGql = {
  __typename?: 'StockIntakePhotoGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  intake_photo_id: Scalars['String'];
  stock_intake_id: Scalars['String'];
  file_name: Scalars['String'];
  signed_url: Maybe<Scalars['String']>;
};

export type StockTakeGql = {
  __typename?: 'StockTakeGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  stock_take_id: Scalars['String'];
  date: Scalars['String'];
  product_item_id: Scalars['String'];
  inventory_quantity: Scalars['Float'];
  verified_quantity: Scalars['Float'];
  distribution_center_id: Maybe<Scalars['String']>;
  distribution_center: Maybe<DistributionCenterGql>;
};

export type ProcessingLossGql = {
  __typename?: 'ProcessingLossGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  processing_loss_id: Scalars['String'];
  processing_loss_number: Scalars['String'];
  batch_id: Maybe<Scalars['String']>;
  date: Scalars['String'];
  cancellation_reason: Maybe<Scalars['String']>;
  loss_type: Maybe<LossType>;
  processing_loss_type_id: Maybe<Scalars['String']>;
  distribution_center_id: Maybe<Scalars['String']>;
  processing_loss_items: Maybe<Array<Maybe<ProcessingLossItemGql>>>;
  processing_loss_type: Maybe<ProcessingLossTypeGql>;
  distribution_center: Maybe<DistributionCenterGql>;
  product_item: Maybe<ProductItemGql>;
  uom: Maybe<Uomgql>;
  packaging_unit: Maybe<PackagingUnitGql>;
  user: Maybe<UserV2Gql>;
  batch: Maybe<BatchGql>;
};

/** An enumeration. */
export enum LossType {
  Processing = 'PROCESSING',
  PostProcessing = 'POST_PROCESSING',
  Staging = 'STAGING',
  Dispatch = 'DISPATCH',
  Sampling = 'SAMPLING',
  Disposal = 'DISPOSAL',
  Warehouse = 'WAREHOUSE',
  Writeoff = 'WRITEOFF',
  B2CReturns = 'B2_C_RETURNS',
  GtReturns = 'GT_RETURNS',
  DepotStaging = 'DEPOT_STAGING',
  MarketResearch = 'MARKET_RESEARCH',
  InTransit = 'IN_TRANSIT'
}

export type ProcessingLossItemGql = {
  __typename?: 'ProcessingLossItemGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  processing_loss_item_id: Scalars['String'];
  processing_loss_id: Scalars['String'];
  date: Scalars['String'];
  product_id: Scalars['String'];
  product_item_id: Scalars['String'];
  quantity: Scalars['Float'];
  unit_of_measure_id: Scalars['String'];
  packaging_unit_id: Maybe<Scalars['String']>;
  packaging_unit_quantity: Maybe<Scalars['Int']>;
  product_loss_reason_id: Scalars['String'];
  picture: Maybe<Scalars['String']>;
  thumbnail: Maybe<Scalars['String']>;
  weight: Maybe<Scalars['Float']>;
  cancellation_reason: Maybe<Scalars['String']>;
  processing_loss: Maybe<ProcessingLossGql>;
  product_loss_reason: Maybe<ProductLossReasonGql>;
  signed_picture: Maybe<Scalars['String']>;
  product_item: Maybe<ProductItemGql>;
  uom: Maybe<Uomgql>;
};

export type ProcessingLossTypeGql = {
  __typename?: 'ProcessingLossTypeGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  processing_loss_type_id: Scalars['String'];
  processing_loss_type_name: Scalars['String'];
  processing_loss_type_description: Maybe<Scalars['String']>;
  processing_losses: Maybe<Array<Maybe<ProcessingLossGql>>>;
};

export type StorageGql = {
  __typename?: 'StorageGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  storage_id: Scalars['String'];
  batch_id: Maybe<Scalars['String']>;
  storage_unit_id: Scalars['String'];
  storage_entry_number: Scalars['String'];
  date: Scalars['DateTime'];
  product_item_id: Scalars['String'];
  quantity: Scalars['Float'];
  weight: Scalars['Float'];
  unit_of_measure_id: Scalars['String'];
  packaging_unit_id: Maybe<Scalars['String']>;
  packaging_unit_quantity: Maybe<Scalars['Int']>;
  comments: Maybe<Scalars['String']>;
  storage_unit: Maybe<StorageUnitGql>;
  direction: Maybe<Scalars['String']>;
  product_item: Maybe<ProductItemGql>;
  uom: Maybe<Uomgql>;
  packaging_unit: Maybe<PackagingUnitGql>;
  user: Maybe<UserV2Gql>;
  batch: Maybe<BatchGql>;
};

export type WarehouseGqlConnection = {
  __typename?: 'WarehouseGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<WarehouseGqlEdge>>;
};

/** A Relay edge containing a `WarehouseGQL` and its cursor. */
export type WarehouseGqlEdge = {
  __typename?: 'WarehouseGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<WarehouseGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type StockIntakeGqlConnection = {
  __typename?: 'StockIntakeGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StockIntakeGqlEdge>>;
};

/** A Relay edge containing a `StockIntakeGQL` and its cursor. */
export type StockIntakeGqlEdge = {
  __typename?: 'StockIntakeGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<StockIntakeGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type StockIntakeItemGqlConnection = {
  __typename?: 'StockIntakeItemGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StockIntakeItemGqlEdge>>;
};

/** A Relay edge containing a `StockIntakeItemGQL` and its cursor. */
export type StockIntakeItemGqlEdge = {
  __typename?: 'StockIntakeItemGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<StockIntakeItemGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ProcessingLossGqlConnection = {
  __typename?: 'ProcessingLossGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProcessingLossGqlEdge>>;
};

/** A Relay edge containing a `ProcessingLossGQL` and its cursor. */
export type ProcessingLossGqlEdge = {
  __typename?: 'ProcessingLossGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<ProcessingLossGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ProcessingLossItemGqlConnection = {
  __typename?: 'ProcessingLossItemGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProcessingLossItemGqlEdge>>;
};

/** A Relay edge containing a `ProcessingLossItemGQL` and its cursor. */
export type ProcessingLossItemGqlEdge = {
  __typename?: 'ProcessingLossItemGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<ProcessingLossItemGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type StorageUnitGqlConnection = {
  __typename?: 'StorageUnitGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StorageUnitGqlEdge>>;
};

/** A Relay edge containing a `StorageUnitGQL` and its cursor. */
export type StorageUnitGqlEdge = {
  __typename?: 'StorageUnitGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<StorageUnitGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type StorageGqlConnection = {
  __typename?: 'StorageGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StorageGqlEdge>>;
};

/** A Relay edge containing a `StorageGQL` and its cursor. */
export type StorageGqlEdge = {
  __typename?: 'StorageGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<StorageGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type StockAvailabilityGqlConnection = {
  __typename?: 'StockAvailabilityGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StockAvailabilityGqlEdge>>;
};

/** A Relay edge containing a `StockAvailabilityGQL` and its cursor. */
export type StockAvailabilityGqlEdge = {
  __typename?: 'StockAvailabilityGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<StockAvailabilityGqLv2>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type StockAvailabilitySummaryGqlConnection = {
  __typename?: 'StockAvailabilitySummaryGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StockAvailabilitySummaryGqlEdge>>;
};

/** A Relay edge containing a `StockAvailabilitySummaryGQL` and its cursor. */
export type StockAvailabilitySummaryGqlEdge = {
  __typename?: 'StockAvailabilitySummaryGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<StockAvailabilitySummaryGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type StockAvailabilitySummaryGql = {
  __typename?: 'StockAvailabilitySummaryGQL';
  sale_date: Maybe<Scalars['String']>;
  product_item_id: Maybe<Scalars['String']>;
  unit_of_measure_id: Maybe<Scalars['String']>;
  quantity: Maybe<Scalars['Float']>;
  product_item: Maybe<ProductItemGql>;
  product_item_uom: Maybe<ProductItemUomgql>;
};

export type StockAvailabilityProductItemGqlConnection = {
  __typename?: 'StockAvailabilityProductItemGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StockAvailabilityProductItemGqlEdge>>;
};

/** A Relay edge containing a `StockAvailabilityProductItemGQL` and its cursor. */
export type StockAvailabilityProductItemGqlEdge = {
  __typename?: 'StockAvailabilityProductItemGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<StockAvailabilityProductItemGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type StockAvailabilityProductItemGql = {
  __typename?: 'StockAvailabilityProductItemGQL';
  product_item_id: Maybe<Scalars['UUID']>;
  product_item_name: Maybe<Scalars['String']>;
  product_id: Maybe<Scalars['UUID']>;
  date_created: Maybe<Scalars['Date']>;
  created_by: Maybe<Scalars['String']>;
  date_updated: Maybe<Scalars['Date']>;
  updated_by: Maybe<Scalars['String']>;
  active: Maybe<Scalars['Boolean']>;
  stock_availability: Maybe<StockAvailabilityGqLv2>;
  product: Maybe<ProductGql>;
  product_item: Maybe<ProductItemGql>;
};



export type ProcessingLossTypeGqlConnection = {
  __typename?: 'ProcessingLossTypeGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProcessingLossTypeGqlEdge>>;
};

/** A Relay edge containing a `ProcessingLossTypeGQL` and its cursor. */
export type ProcessingLossTypeGqlEdge = {
  __typename?: 'ProcessingLossTypeGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<ProcessingLossTypeGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type StockTakeGqlConnection = {
  __typename?: 'StockTakeGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StockTakeGqlEdge>>;
};

/** A Relay edge containing a `StockTakeGQL` and its cursor. */
export type StockTakeGqlEdge = {
  __typename?: 'StockTakeGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<StockTakeGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type BatchGqlConnection = {
  __typename?: 'BatchGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BatchGqlEdge>>;
};

/** A Relay edge containing a `BatchGQL` and its cursor. */
export type BatchGqlEdge = {
  __typename?: 'BatchGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<BatchGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ArticleGqlConnection = {
  __typename?: 'ArticleGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ArticleGqlEdge>>;
};

/** A Relay edge containing a `ArticleGQL` and its cursor. */
export type ArticleGqlEdge = {
  __typename?: 'ArticleGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<ArticleGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ArticleGql = Node & {
  __typename?: 'ArticleGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  article_id: Scalars['String'];
  date: Scalars['DateTime'];
  title: Scalars['String'];
  category: ArticleCategory;
  body: Scalars['String'];
  image: Maybe<Scalars['String']>;
  image_url: Maybe<Scalars['String']>;
  saved_article: Maybe<SavedArticleGql>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

/** An enumeration. */
export enum ArticleCategory {
  Tutorial = 'TUTORIAL',
  Statistics = 'STATISTICS'
}

export type SavedArticleGql = Node & {
  __typename?: 'SavedArticleGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  article_id: Maybe<Scalars['String']>;
  user_id: Scalars['String'];
  save_date: Scalars['DateTime'];
  saved_article_id: Scalars['String'];
  article: Maybe<ArticleGql>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type SavedArticleGqlConnection = {
  __typename?: 'SavedArticleGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SavedArticleGqlEdge>>;
};

/** A Relay edge containing a `SavedArticleGQL` and its cursor. */
export type SavedArticleGqlEdge = {
  __typename?: 'SavedArticleGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<SavedArticleGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type BidGqlConnection = {
  __typename?: 'BidGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BidGqlEdge>>;
};

/** A Relay edge containing a `BidGQL` and its cursor. */
export type BidGqlEdge = {
  __typename?: 'BidGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<BidGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type BidApplicationGqlConnection = {
  __typename?: 'BidApplicationGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BidApplicationGqlEdge>>;
};

/** A Relay edge containing a `BidApplicationGQL` and its cursor. */
export type BidApplicationGqlEdge = {
  __typename?: 'BidApplicationGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<BidApplicationGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** An enumeration. */
export enum BidStatus {
  Pending = 'PENDING',
  Active = 'ACTIVE',
  Closed = 'CLOSED'
}

/** An enumeration. */
export enum BidApplicationStatus {
  Submitted = 'SUBMITTED',
  Accepted = 'ACCEPTED',
  Confirmed = 'CONFIRMED',
  Delivered = 'DELIVERED',
  Expired = 'EXPIRED'
}

/** An enumeration. */
export enum BidApplicationType {
  Active = 'ACTIVE',
  Past = 'PAST',
  Won = 'WON'
}

export type HarvestGqlConnection = {
  __typename?: 'HarvestGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<HarvestGqlEdge>>;
};

/** A Relay edge containing a `HarvestGQL` and its cursor. */
export type HarvestGqlEdge = {
  __typename?: 'HarvestGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<HarvestGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PaymentDetailGqlConnection = {
  __typename?: 'PaymentDetailGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PaymentDetailGqlEdge>>;
};

/** A Relay edge containing a `PaymentDetailGQL` and its cursor. */
export type PaymentDetailGqlEdge = {
  __typename?: 'PaymentDetailGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<PaymentDetailGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type HarvestItemGqlConnection = {
  __typename?: 'HarvestItemGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<HarvestItemGqlEdge>>;
};

/** A Relay edge containing a `HarvestItemGQL` and its cursor. */
export type HarvestItemGqlEdge = {
  __typename?: 'HarvestItemGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<HarvestItemGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** An enumeration. */
export enum PaymentAccountType {
  Bank = 'BANK',
  Mobile = 'MOBILE',
  Manual = 'MANUAL'
}

/** An enumeration. */
export enum FarmerType {
  NonContractFarmer = 'NON_CONTRACT_FARMER',
  ContractFarmer = 'CONTRACT_FARMER',
  Agent = 'AGENT',
  Wholesaler = 'WHOLESALER',
  Distributor = 'DISTRIBUTOR',
  Manufacturer = 'MANUFACTURER'
}

export type FarmerGqlConnection = {
  __typename?: 'FarmerGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FarmerGqlEdge>>;
};

/** A Relay edge containing a `FarmerGQL` and its cursor. */
export type FarmerGqlEdge = {
  __typename?: 'FarmerGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<FarmerGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type SourcingAgentGqlConnection = {
  __typename?: 'SourcingAgentGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SourcingAgentGqlEdge>>;
};

/** A Relay edge containing a `SourcingAgentGQL` and its cursor. */
export type SourcingAgentGqlEdge = {
  __typename?: 'SourcingAgentGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<SourcingAgentGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type FarmGqlConnection = {
  __typename?: 'FarmGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FarmGqlEdge>>;
};

/** A Relay edge containing a `FarmGQL` and its cursor. */
export type FarmGqlEdge = {
  __typename?: 'FarmGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<FarmGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type FarmerPaymentAccountGqlConnection = {
  __typename?: 'FarmerPaymentAccountGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FarmerPaymentAccountGqlEdge>>;
};

/** A Relay edge containing a `FarmerPaymentAccountGQL` and its cursor. */
export type FarmerPaymentAccountGqlEdge = {
  __typename?: 'FarmerPaymentAccountGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<FarmerPaymentAccountGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type AgentFeedbackGqlConnection = {
  __typename?: 'AgentFeedbackGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AgentFeedbackGqlEdge>>;
};

/** A Relay edge containing a `AgentFeedbackGQL` and its cursor. */
export type AgentFeedbackGqlEdge = {
  __typename?: 'AgentFeedbackGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<AgentFeedbackGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type SupplierUserGqlConnection = {
  __typename?: 'SupplierUserGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SupplierUserGqlEdge>>;
};

/** A Relay edge containing a `SupplierUserGQL` and its cursor. */
export type SupplierUserGqlEdge = {
  __typename?: 'SupplierUserGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<SupplierUserGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type SupplierProductGqlConnection = {
  __typename?: 'SupplierProductGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SupplierProductGqlEdge>>;
};

/** A Relay edge containing a `SupplierProductGQL` and its cursor. */
export type SupplierProductGqlEdge = {
  __typename?: 'SupplierProductGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<SupplierProductGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type BookingGqlConnection = {
  __typename?: 'BookingGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BookingGqlEdge>>;
};

/** A Relay edge containing a `BookingGQL` and its cursor. */
export type BookingGqlEdge = {
  __typename?: 'BookingGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<BookingGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PriceRangeGqlConnection = {
  __typename?: 'PriceRangeGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PriceRangeGqlEdge>>;
};

/** A Relay edge containing a `PriceRangeGQL` and its cursor. */
export type PriceRangeGqlEdge = {
  __typename?: 'PriceRangeGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<PriceRangeGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type BookingItemGqlConnection = {
  __typename?: 'BookingItemGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BookingItemGqlEdge>>;
};

/** A Relay edge containing a `BookingItemGQL` and its cursor. */
export type BookingItemGqlEdge = {
  __typename?: 'BookingItemGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<BookingItemGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ProductPromotionalBannerGql = {
  __typename?: 'ProductPromotionalBannerGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  banner_id: Scalars['String'];
  start_date: Maybe<Scalars['DateTime']>;
  end_date: Maybe<Scalars['DateTime']>;
  image: Maybe<Scalars['String']>;
  image_url: Maybe<Scalars['String']>;
  banner_name: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  destination_url: Scalars['String'];
  featured: Scalars['Boolean'];
  meta: Maybe<Scalars['JSONString']>;
};

/** An enumeration. */
export enum BusinessDomain {
  Booking = 'booking',
  Harvest = 'harvest',
  Sales = 'sales',
  Mcommerce = 'mcommerce',
  Dispatch = 'dispatch',
  Processing = 'processing',
  Pricing = 'pricing'
}

/** Pagination Connection for ProductGQL type. */
export type ProductGqlConnection = {
  __typename?: 'ProductGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductGqlEdge>>;
};

/** A Relay edge containing a `ProductGQL` and its cursor. */
export type ProductGqlEdge = {
  __typename?: 'ProductGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<ProductGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Pagination Connection for ProductItemGQL type. */
export type ProductItemGqlConnection = {
  __typename?: 'ProductItemGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductItemGqlEdge>>;
};

/** A Relay edge containing a `ProductItemGQL` and its cursor. */
export type ProductItemGqlEdge = {
  __typename?: 'ProductItemGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<ProductItemGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Return Reason GQL */
export type ReturnReasonGql = {
  __typename?: 'ReturnReasonGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  reason_id: Scalars['String'];
  parent_id: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description: Maybe<Scalars['String']>;
  return_type: ReturnTypeEnum;
  parent: Maybe<ReturnReasonGql>;
  children: Maybe<Array<Maybe<ReturnReasonGql>>>;
};

/** Return type Enum */
export enum ReturnTypeEnum {
  DeliveryReturn = 'DELIVERY_RETURN',
  OrderReturn = 'ORDER_RETURN'
}

/** An enumeration. */
export enum ProductType {
  Fmcg = 'FMCG',
  Ffv = 'FFV',
  Bundle = 'BUNDLE'
}

export type BundleAssociationGql = {
  __typename?: 'BundleAssociationGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  association_id: Scalars['String'];
  parent_product_item_id: Scalars['String'];
  child_product_item_id: Scalars['String'];
  expiry_date: Maybe<Scalars['DateTime']>;
  quantity: Scalars['Float'];
  discount: Scalars['Float'];
  parent_sku: Maybe<ProductItemGql>;
  child_sku: Maybe<ProductItemGql>;
};

/** Pagination Connection for PricingGQL type. */
export type PricingV2GqlConnection = {
  __typename?: 'PricingV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  edges: Array<Maybe<PricingV2GqlEdge>>;
};

export type PricingV2GqlEdge = {
  __typename?: 'PricingV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<PricingV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Pagination Connection for DynamicPricingGQL type. */
export type DynamicPricingGqlConnection = {
  __typename?: 'DynamicPricingGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  edges: Array<Maybe<DynamicPricingGqlEdge>>;
};

export type DynamicPricingGqlEdge = {
  __typename?: 'DynamicPricingGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<DynamicPricingGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** DynamicPricingGQL type. */
export type DynamicPricingGql = Node & {
  __typename?: 'DynamicPricingGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  dynamic_pricing_id: Scalars['String'];
  pricing_name: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  start_time: Maybe<Scalars['DateTime']>;
  end_time: Maybe<Scalars['DateTime']>;
  exclusive: Maybe<Scalars['Boolean']>;
  discount_type: Maybe<Scalars['String']>;
  value: Maybe<Scalars['Float']>;
  formula: Scalars['JSONString'];
  /** The ID of the object. */
  id: Scalars['ID'];
  user: Maybe<UserV2Gql>;
};

export type WorkOrderGqlConnection = {
  __typename?: 'WorkOrderGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<WorkOrderGqlEdge>>;
};

/** A Relay edge containing a `WorkOrderGQL` and its cursor. */
export type WorkOrderGqlEdge = {
  __typename?: 'WorkOrderGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<WorkOrderGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type WorkOrderGql = {
  __typename?: 'WorkOrderGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  work_order_id: Scalars['String'];
  route_id: Scalars['String'];
  shop_id: Scalars['String'];
  role_id: Scalars['String'];
  user_id: Maybe<Scalars['String']>;
  sort_order: Maybe<Scalars['Int']>;
  date: Scalars['String'];
  shop: Maybe<ShopV2Gql>;
  route: Maybe<RouteV2Gql>;
  work_order_items: Maybe<Array<Maybe<WorkOrderItemGql>>>;
};

export type ShopV2Gql = {
  __typename?: 'ShopV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  shop_id: Scalars['String'];
  shop_number: Scalars['String'];
  shop_name: Scalars['String'];
  shop_type_id: Scalars['String'];
  route_id: Maybe<Scalars['String']>;
  region_id: Maybe<Scalars['String']>;
  customer_id: Scalars['String'];
  latitude: Maybe<Scalars['Float']>;
  longitude: Maybe<Scalars['Float']>;
  physical_address: Maybe<Scalars['String']>;
  image: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  approved: Scalars['Boolean'];
  approved_by: Maybe<Scalars['String']>;
  approved_date: Maybe<Scalars['DateTime']>;
  depot_distance: Maybe<Scalars['Float']>;
  shop_type: Maybe<ShopTypeV2Gql>;
  customer: Maybe<CustomerV2Gql>;
  region: Maybe<RegionV2Gql>;
  contacts: Maybe<Array<Maybe<ShopContactV2Gql>>>;
  customer_types: Maybe<Array<Maybe<CustomerTypeV2Gql>>>;
  order_returns: Maybe<Array<Maybe<OrderReturnGql>>>;
  delivery_returns: Maybe<Array<Maybe<DeliveryReturnGql>>>;
  work_orders: Maybe<Array<Maybe<WorkOrderGql>>>;
  status: Maybe<Array<Maybe<Scalars['String']>>>;
  signed_image_url: Maybe<Scalars['String']>;
  route: Maybe<RouteV2Gql>;
  delivery_fee: Maybe<Scalars['Float']>;
};

export type ShopTypeV2Gql = {
  __typename?: 'ShopTypeV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  shop_type_id: Scalars['String'];
  name: Scalars['String'];
  parent_id: Maybe<Scalars['String']>;
  parent: Maybe<ShopTypeV2Gql>;
  children: Maybe<Array<Maybe<ShopTypeV2Gql>>>;
  shops: Maybe<Array<Maybe<ShopV2Gql>>>;
};

export type CustomerV2Gql = {
  __typename?: 'CustomerV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  customer_id: Scalars['String'];
  customer_name: Scalars['String'];
  phone_number: Scalars['String'];
  approved: Scalars['Boolean'];
  approved_by: Maybe<Scalars['String']>;
  approved_date: Maybe<Scalars['DateTime']>;
  shops: Maybe<Array<Maybe<ShopV2Gql>>>;
  vendor_kyc: Maybe<VendorKycgql>;
};

export type VendorKycgql = {
  __typename?: 'VendorKYCGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  vendor_kyc_id: Scalars['String'];
  legal_name: Scalars['String'];
  customer_id: Maybe<Scalars['String']>;
  legal_document: LegalDocumentEnum;
  phone_number: Scalars['String'];
  legal_document_number: Scalars['String'];
  legal_document_front_image: Maybe<Scalars['String']>;
  legal_document_back_image: Maybe<Scalars['String']>;
  consent_form_image: Maybe<Scalars['String']>;
  approved: Scalars['Boolean'];
  approved_by: Maybe<Scalars['String']>;
  date_approved: Maybe<Scalars['DateTime']>;
  monthly_income: Maybe<Scalars['Float']>;
  monthly_expenditure: Maybe<Scalars['Float']>;
  id_verified: Scalars['Boolean'];
  customer: Maybe<CustomerV2Gql>;
  finance_plans: Maybe<Array<Maybe<VendorFinancePlanGql>>>;
  signed_consent_form_url: Maybe<Scalars['String']>;
  signed_legal_document_front_image_url: Maybe<Scalars['String']>;
  signed_legal_document_back_image_url: Maybe<Scalars['String']>;
};

/** Legal Document Enum */
export enum LegalDocumentEnum {
  NationalId = 'NATIONAL_ID',
  Passport = 'PASSPORT'
}

export type VendorFinancePlanGql = {
  __typename?: 'VendorFinancePlanGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  plan_id: Scalars['String'];
  name: Scalars['String'];
  required_fields: Array<Maybe<Scalars['String']>>;
};

export type ShopContactV2Gql = {
  __typename?: 'ShopContactV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  contact_id: Scalars['String'];
  shop_id: Scalars['String'];
  contact_name: Scalars['String'];
  phone_number: Scalars['String'];
  email_address: Maybe<Scalars['String']>;
};

export type CustomerTypeV2Gql = {
  __typename?: 'CustomerTypeV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  customer_type_id: Scalars['String'];
  name: Scalars['String'];
};

/** OrderReturn GQL. */
export type OrderReturnGql = {
  __typename?: 'OrderReturnGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  return_date: Scalars['String'];
  return_number: Scalars['String'];
  user_id: Scalars['String'];
  route_plan_id: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  order_id: Scalars['String'];
  return_id: Scalars['String'];
  shop_id: Scalars['String'];
  route_id: Maybe<Scalars['String']>;
  return_items: Maybe<Array<Maybe<OrderReturnItemGql>>>;
  order: Maybe<OrderV2Gql>;
  shop: Maybe<ShopV2Gql>;
};

/** Order item return GQL. */
export type OrderReturnItemGql = {
  __typename?: 'OrderReturnItemGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  return_item_id: Scalars['String'];
  unit_of_measure_id: Maybe<Scalars['String']>;
  return_date: Scalars['String'];
  quantity: Scalars['Float'];
  weight: Scalars['Float'];
  comment: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  unit_price: Scalars['Float'];
  image: Maybe<Scalars['String']>;
  return_id: Scalars['String'];
  product_item_id: Scalars['String'];
  reason_id: Maybe<Scalars['String']>;
  reason: Maybe<ReturnReasonGql>;
  return: Maybe<OrderReturnGql>;
  signed_image_url: Maybe<Scalars['String']>;
  product_item: Maybe<ProductItemGql>;
};

/** Order GQL. */
export type OrderV2Gql = {
  __typename?: 'OrderV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  order_id: Scalars['String'];
  shop_id: Scalars['String'];
  route_id: Scalars['String'];
  region_id: Maybe<Scalars['String']>;
  route_plan_id: Maybe<Scalars['String']>;
  trader_entity_id: Maybe<Scalars['String']>;
  order_date: Scalars['String'];
  delivery_date: Scalars['String'];
  order_number: Scalars['String'];
  amount: Scalars['Float'];
  comment: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  priority: Maybe<Scalars['Boolean']>;
  cancellation_reason: Maybe<Scalars['String']>;
  trader_entity_user_id: Scalars['String'];
  trader_entity: TraderEntityEnum;
  fulfilled: Scalars['Boolean'];
  non_delivery_reason: Maybe<Scalars['String']>;
  routing_order: Maybe<Scalars['Int']>;
  delivery_fee: Scalars['Float'];
  shop: Maybe<ShopV2Gql>;
  route: Maybe<RouteV2Gql>;
  order_assignment: Maybe<OrderAssignmentV2Gql>;
  order_items: Maybe<Array<Maybe<OrderItemV2Gql>>>;
  order_returns: Maybe<Array<Maybe<OrderReturnGql>>>;
  total_amount: Maybe<Scalars['Float']>;
  served_by: Maybe<UserV2Gql>;
  route_plan: Maybe<RoutePlanGql>;
};

/** Trader Entity. */
export enum TraderEntityEnum {
  Mcommerce = 'MCOMMERCE',
  Dms = 'DMS',
  Courier = 'COURIER',
  Pwa = 'PWA',
  Sokocall = 'SOKOCALL'
}

/** Order Assignment GQL. */
export type OrderAssignmentV2Gql = {
  __typename?: 'OrderAssignmentV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  assignment_id: Scalars['String'];
  order_id: Scalars['String'];
  trader_entity_id: Scalars['String'];
  trader_entity_user_id: Scalars['String'];
  sale_date: Scalars['String'];
  fulfilled: Scalars['Boolean'];
  order: Maybe<OrderV2Gql>;
};

/** Order item GQL. */
export type OrderItemV2Gql = {
  __typename?: 'OrderItemV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  order_item_id: Scalars['String'];
  order_id: Scalars['String'];
  product_item_id: Scalars['String'];
  fulfilled: Scalars['Boolean'];
  unit_of_measure_id: Maybe<Scalars['String']>;
  order_date: Scalars['String'];
  amount: Scalars['Float'];
  quantity: Scalars['Float'];
  weight: Scalars['Float'];
  unit_price: Scalars['Float'];
  comment: Maybe<Scalars['String']>;
  packed_weight: Maybe<Scalars['Float']>;
  packed_volume: Maybe<Scalars['Float']>;
  order: Maybe<OrderV2Gql>;
  product_item: Maybe<ProductItemGql>;
  uom: Maybe<Uomgql>;
};

export type RoutePlanGql = {
  __typename?: 'RoutePlanGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  route_plan_id: Scalars['String'];
  delivery_date: Scalars['String'];
  vehicle_id: Scalars['String'];
  depot_id: Scalars['String'];
  route_id: Maybe<Scalars['String']>;
  distance: Scalars['Float'];
  orders: Array<Maybe<Scalars['String']>>;
  weight: Maybe<Scalars['Float']>;
  volume: Maybe<Scalars['Float']>;
  num_shops: Maybe<Scalars['Int']>;
  starting_odometer: Maybe<Scalars['Float']>;
  closing_odometer: Maybe<Scalars['Float']>;
  region_id: Maybe<Scalars['String']>;
  vehicle: Maybe<VehicleGql>;
  fulfillment_teams: Maybe<Array<Maybe<FulfillmentTeamGql>>>;
  planned_orders: Maybe<Scalars['Int']>;
  depot: Maybe<DepotV2Gql>;
  order_summary: Maybe<RoutePlanOrderSummaryGql>;
  region: Maybe<RegionV2Gql>;
};

export type VehicleGql = {
  __typename?: 'VehicleGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  vehicle_id: Scalars['String'];
  vehicle_type_id: Scalars['String'];
  depot_id: Maybe<Scalars['String']>;
  route_id: Maybe<Scalars['String']>;
  registration_number: Scalars['String'];
  owner_name: Scalars['String'];
  phone_number: Scalars['String'];
  load_capacity: Scalars['Float'];
  usable_load_capacity: Scalars['Float'];
  capacity_volume: Scalars['Float'];
  usable_volume: Scalars['Float'];
  locked: Scalars['Boolean'];
  product_type: Maybe<Scalars['String']>;
  vehicle_type: Maybe<VehicleTypeGql>;
  last_assigned: Maybe<Scalars['String']>;
  depot: Maybe<DepotV2Gql>;
  route: Maybe<RouteV2Gql>;
};

export type VehicleTypeGql = {
  __typename?: 'VehicleTypeGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  vehicle_type_id: Scalars['String'];
  vehicle_type_name: Scalars['String'];
  details: Maybe<Scalars['String']>;
};

export type FulfillmentTeamGql = {
  __typename?: 'FulfillmentTeamGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  fulfillment_team_id: Scalars['String'];
  route_plan_id: Scalars['String'];
  start_time: Maybe<Scalars['DateTime']>;
  end_time: Maybe<Scalars['DateTime']>;
  user_id: Scalars['String'];
  assignment_number: Scalars['String'];
  delivery_date: Scalars['String'];
  route_plan: Maybe<RoutePlanGql>;
  status: Maybe<Scalars['String']>;
  user: Maybe<UserV2Gql>;
};

export type RoutePlanOrderSummaryGql = {
  __typename?: 'RoutePlanOrderSummaryGQL';
  route_plan_id: Maybe<Scalars['String']>;
  fulfilled_orders: Maybe<Scalars['Int']>;
};

/** DeliveryReturn GQL. */
export type DeliveryReturnGql = {
  __typename?: 'DeliveryReturnGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  return_date: Scalars['String'];
  return_number: Scalars['String'];
  user_id: Scalars['String'];
  route_plan_id: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  delivery_id: Scalars['String'];
  return_id: Scalars['String'];
  shop_id: Scalars['String'];
  route_id: Maybe<Scalars['String']>;
  return_items: Maybe<Array<Maybe<DeliveryReturnItemGql>>>;
  delivery: Maybe<DeliveryV2Gql>;
  shop: Maybe<ShopV2Gql>;
};

/** Delivery item return GQL. */
export type DeliveryReturnItemGql = {
  __typename?: 'DeliveryReturnItemGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  return_item_id: Scalars['String'];
  unit_of_measure_id: Maybe<Scalars['String']>;
  return_date: Scalars['String'];
  quantity: Scalars['Float'];
  weight: Scalars['Float'];
  comment: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  unit_price: Scalars['Float'];
  image: Maybe<Scalars['String']>;
  return_id: Scalars['String'];
  product_item_id: Scalars['String'];
  reason_id: Maybe<Scalars['String']>;
  reason: Maybe<ReturnReasonGql>;
  return: Maybe<DeliveryReturnGql>;
  signed_image_url: Maybe<Scalars['String']>;
  product_item: Maybe<ProductItemGql>;
};

/** Delivery GQL. */
export type DeliveryV2Gql = {
  __typename?: 'DeliveryV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  delivery_id: Scalars['String'];
  order_id: Maybe<Scalars['String']>;
  depot_id: Maybe<Scalars['String']>;
  region_id: Maybe<Scalars['String']>;
  shop_id: Scalars['String'];
  route_id: Maybe<Scalars['String']>;
  trader_entity_id: Maybe<Scalars['String']>;
  delivery_date: Scalars['String'];
  route_plan_id: Maybe<Scalars['String']>;
  delivery_number: Scalars['String'];
  amount: Scalars['Float'];
  comment: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  priority: Maybe<Scalars['Boolean']>;
  cancellation_reason: Maybe<Scalars['String']>;
  trader_entity_user_id: Scalars['String'];
  trader_entity: TraderEntityEnum;
  delivery_fee: Scalars['Float'];
  shop: Maybe<ShopV2Gql>;
  route: Maybe<RouteV2Gql>;
  payments: Maybe<Array<Maybe<PaymentV2Gql>>>;
  delivery_status: Maybe<Array<Maybe<DeliveryStatusV2Gql>>>;
  order: Maybe<OrderV2Gql>;
  depot: Maybe<DepotV2Gql>;
  delivery_items: Maybe<Array<Maybe<DeliveryItemV2Gql>>>;
  delivery_returns: Maybe<Array<Maybe<DeliveryReturnGql>>>;
  total_amount: Maybe<Scalars['Float']>;
  served_by: Maybe<UserV2Gql>;
};

export type PaymentV2Gql = {
  __typename?: 'PaymentV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  payment_id: Scalars['String'];
  delivery_id: Scalars['String'];
  payment_mode: PaymentMode;
  reference_number: Maybe<Scalars['String']>;
  payment_number: Scalars['String'];
  amount: Scalars['Float'];
  delivery: Maybe<DeliveryV2Gql>;
};

/** Payment Mode Enum */
export enum PaymentMode {
  Cash = 'CASH',
  MobileMoney = 'MOBILE_MONEY',
  Bank = 'BANK',
  Loan = 'LOAN',
  MpesaTill = 'MPESA_TILL',
  MpesaStk = 'MPESA_STK',
  MpesaTillAuto = 'MPESA_TILL_AUTO'
}

/** Delivery Status GQL. */
export type DeliveryStatusV2Gql = {
  __typename?: 'DeliveryStatusV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  delivery_status_id: Scalars['String'];
  delivery_id: Scalars['String'];
  delivery_status: DeliveryStatusEnum;
  delivery: Maybe<DeliveryV2Gql>;
};

/** Delivery Status Enum */
export enum DeliveryStatusEnum {
  Delivered = 'DELIVERED',
  Confirmed = 'CONFIRMED',
  PartiallyPaid = 'PARTIALLY_PAID',
  FullyPaid = 'FULLY_PAID'
}

/** Delivery item GQL. */
export type DeliveryItemV2Gql = {
  __typename?: 'DeliveryItemV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  delivery_item_id: Scalars['String'];
  delivery_id: Scalars['String'];
  product_item_id: Scalars['String'];
  unit_of_measure_id: Maybe<Scalars['String']>;
  delivery_date: Scalars['String'];
  amount: Scalars['Float'];
  quantity: Scalars['Float'];
  weight: Scalars['Float'];
  packed_weight: Maybe<Scalars['Float']>;
  packed_volume: Maybe<Scalars['Float']>;
  unit_price: Scalars['Float'];
  comment: Maybe<Scalars['String']>;
  delivery: Maybe<DeliveryV2Gql>;
  product_item: Maybe<ProductItemGql>;
  uom: Maybe<Uomgql>;
};

export type WorkOrderItemGql = {
  __typename?: 'WorkOrderItemGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  work_order_item_id: Scalars['String'];
  work_order_id: Maybe<Scalars['String']>;
  reason_id: Maybe<Scalars['String']>;
  comment: Maybe<Scalars['String']>;
  reference_entity_id: Maybe<Scalars['String']>;
  reference_entity: Maybe<WorkOrderEntityEnum>;
  reason: Maybe<WorkOrderReasonGql>;
  work_order: Maybe<WorkOrderGql>;
};

/** Work Order Entity Enum */
export enum WorkOrderEntityEnum {
  Order = 'ORDER',
  Delivery = 'DELIVERY',
  Payment = 'PAYMENT',
  Return = 'RETURN'
}

export type WorkOrderReasonGql = {
  __typename?: 'WorkOrderReasonGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  reason_id: Scalars['String'];
  name: Scalars['String'];
  description: Maybe<Scalars['String']>;
};

export type WorkOrderDefinitionGql = {
  __typename?: 'WorkOrderDefinitionGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  definition_id: Scalars['String'];
  role_id: Scalars['String'];
  query: Scalars['String'];
  start_date: Maybe<Scalars['DateTime']>;
  end_date: Maybe<Scalars['DateTime']>;
  reason_id: Maybe<Scalars['String']>;
};

export type WorkOrderItemGqlConnection = {
  __typename?: 'WorkOrderItemGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<WorkOrderItemGqlEdge>>;
};

/** A Relay edge containing a `WorkOrderItemGQL` and its cursor. */
export type WorkOrderItemGqlEdge = {
  __typename?: 'WorkOrderItemGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<WorkOrderItemGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Node and relay Connection. */
export type DeliveryReturnGqlConnection = {
  __typename?: 'DeliveryReturnGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DeliveryReturnGqlEdge>>;
};

/** A Relay edge containing a `DeliveryReturnGQL` and its cursor. */
export type DeliveryReturnGqlEdge = {
  __typename?: 'DeliveryReturnGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<DeliveryReturnGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Node and relay Connection. */
export type DeliveryReturnItemGqlConnection = {
  __typename?: 'DeliveryReturnItemGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DeliveryReturnItemGqlEdge>>;
};

/** A Relay edge containing a `DeliveryReturnItemGQL` and its cursor. */
export type DeliveryReturnItemGqlEdge = {
  __typename?: 'DeliveryReturnItemGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<DeliveryReturnItemGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Node and relay Connection. */
export type OrderReturnGqlConnection = {
  __typename?: 'OrderReturnGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OrderReturnGqlEdge>>;
};

/** A Relay edge containing a `OrderReturnGQL` and its cursor. */
export type OrderReturnGqlEdge = {
  __typename?: 'OrderReturnGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<OrderReturnGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Node and relay Connection. */
export type OrderReturnItemGqlConnection = {
  __typename?: 'OrderReturnItemGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OrderReturnItemGqlEdge>>;
};

/** A Relay edge containing a `OrderReturnItemGQL` and its cursor. */
export type OrderReturnItemGqlEdge = {
  __typename?: 'OrderReturnItemGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<OrderReturnItemGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type StockNotificationGqlConnection = {
  __typename?: 'StockNotificationGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StockNotificationGqlEdge>>;
};

/** A Relay edge containing a `StockNotificationGQL` and its cursor. */
export type StockNotificationGqlEdge = {
  __typename?: 'StockNotificationGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<StockNotificationGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type StockNotificationGql = {
  __typename?: 'StockNotificationGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  stock_notification_id: Scalars['String'];
  shop_id: Scalars['String'];
  product_item_id: Scalars['String'];
  region_id: Maybe<Scalars['String']>;
  phone_number: Scalars['String'];
  device_token: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
};

/** Pagination Connection for PaymentAccountV2GQL */
export type PaymentAccountV2GqlConnection = {
  __typename?: 'PaymentAccountV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PaymentAccountV2GqlEdge>>;
};

/** A Relay edge containing a `PaymentAccountV2GQL` and its cursor. */
export type PaymentAccountV2GqlEdge = {
  __typename?: 'PaymentAccountV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<PaymentAccountV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Pagination Connection for RoutePaymentAccountV2GQL */
export type RoutePaymentAccountV2GqlConnection = {
  __typename?: 'RoutePaymentAccountV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<RoutePaymentAccountV2GqlEdge>>;
};

/** A Relay edge containing a `RoutePaymentAccountV2GQL` and its cursor. */
export type RoutePaymentAccountV2GqlEdge = {
  __typename?: 'RoutePaymentAccountV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<RoutePaymentAccountV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Pagination Connection for PaymentV2GQL */
export type PaymentV2GqlConnection = {
  __typename?: 'PaymentV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PaymentV2GqlEdge>>;
};

/** A Relay edge containing a `PaymentV2GQL` and its cursor. */
export type PaymentV2GqlEdge = {
  __typename?: 'PaymentV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<PaymentV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Node and relay Connection. */
export type DeliveryV2GqlConnection = {
  __typename?: 'DeliveryV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DeliveryV2GqlEdge>>;
};

/** A Relay edge containing a `DeliveryV2GQL` and its cursor. */
export type DeliveryV2GqlEdge = {
  __typename?: 'DeliveryV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<DeliveryV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Node and relay Connection. */
export type DeliveryFeeScheduleGqlConnection = {
  __typename?: 'DeliveryFeeScheduleGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DeliveryFeeScheduleGqlEdge>>;
};

/** A Relay edge containing a `DeliveryFeeScheduleGQL` and its cursor. */
export type DeliveryFeeScheduleGqlEdge = {
  __typename?: 'DeliveryFeeScheduleGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<DeliveryFeeScheduleGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** DeliveryFeeSchedule GQL. */
export type DeliveryFeeScheduleGql = {
  __typename?: 'DeliveryFeeScheduleGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  schedule_id: Scalars['String'];
  route_id: Scalars['String'];
  lower_bound: Scalars['Float'];
  upper_bound: Scalars['Float'];
  fee: Scalars['Float'];
  route: Maybe<RouteV2Gql>;
};

export type RealizedRevenueV2Gql = {
  __typename?: 'RealizedRevenueV2GQL';
  realized_revenue: Maybe<Scalars['Float']>;
  date: Maybe<Scalars['String']>;
};

/** Node and relay Connection. */
export type DeliveryItemV2GqlConnection = {
  __typename?: 'DeliveryItemV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DeliveryItemV2GqlEdge>>;
};

/** A Relay edge containing a `DeliveryItemV2GQL` and its cursor. */
export type DeliveryItemV2GqlEdge = {
  __typename?: 'DeliveryItemV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<DeliveryItemV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ShopDeliverySummaryV2Gql = {
  __typename?: 'ShopDeliverySummaryV2GQL';
  date: Maybe<Scalars['String']>;
  last_delivery_date: Maybe<Scalars['String']>;
  total_sales: Maybe<Scalars['Float']>;
  average_drop_size: Maybe<Scalars['Float']>;
  last_sale_amount: Maybe<Scalars['Float']>;
};

/** Node and relay Connection. */
export type DeliveryProductSummaryV2GqlConnection = {
  __typename?: 'DeliveryProductSummaryV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DeliveryProductSummaryV2GqlEdge>>;
};

/** A Relay edge containing a `DeliveryProductSummaryV2GQL` and its cursor. */
export type DeliveryProductSummaryV2GqlEdge = {
  __typename?: 'DeliveryProductSummaryV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<DeliveryProductSummaryV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type DeliveryProductSummaryV2Gql = {
  __typename?: 'DeliveryProductSummaryV2GQL';
  date: Maybe<Scalars['String']>;
  product_item_id: Maybe<Scalars['String']>;
  revenue: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
  unit_price: Maybe<Scalars['Float']>;
  unit_of_measure_id: Maybe<Scalars['String']>;
};

/** TraderEntity GQL. */
export type TraderEntityV2Gql = {
  __typename?: 'TraderEntityV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  trader_entity_id: Scalars['String'];
  trader_entity_name: Scalars['String'];
  description: Maybe<Scalars['String']>;
};

/** Node and relay Connection. */
export type OrderV2GqlConnection = {
  __typename?: 'OrderV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OrderV2GqlEdge>>;
};

/** A Relay edge containing a `OrderV2GQL` and its cursor. */
export type OrderV2GqlEdge = {
  __typename?: 'OrderV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<OrderV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Node and relay Connection. */
export type OrderItemV2GqlConnection = {
  __typename?: 'OrderItemV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OrderItemV2GqlEdge>>;
};

/** A Relay edge containing a `OrderItemV2GQL` and its cursor. */
export type OrderItemV2GqlEdge = {
  __typename?: 'OrderItemV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<OrderItemV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Node and relay Connection. */
export type OrderAssignmentV2GqlConnection = {
  __typename?: 'OrderAssignmentV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OrderAssignmentV2GqlEdge>>;
};

/** A Relay edge containing a `OrderAssignmentV2GQL` and its cursor. */
export type OrderAssignmentV2GqlEdge = {
  __typename?: 'OrderAssignmentV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<OrderAssignmentV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ShopOrderSummaryV2Gql = {
  __typename?: 'ShopOrderSummaryV2GQL';
  date: Maybe<Scalars['String']>;
  last_order_date: Maybe<Scalars['String']>;
  total_orders: Maybe<Scalars['Float']>;
  average_order_value: Maybe<Scalars['Float']>;
  last_order_amount: Maybe<Scalars['Float']>;
};

/** Node and relay Connection. */
export type OrderProductSummaryV2GqlConnection = {
  __typename?: 'OrderProductSummaryV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OrderProductSummaryV2GqlEdge>>;
};

/** A Relay edge containing a `OrderProductSummaryV2GQL` and its cursor. */
export type OrderProductSummaryV2GqlEdge = {
  __typename?: 'OrderProductSummaryV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<OrderProductSummaryV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type OrderProductSummaryV2Gql = {
  __typename?: 'OrderProductSummaryV2GQL';
  date: Maybe<Scalars['String']>;
  product_item_id: Maybe<Scalars['String']>;
  revenue: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
  unit_price: Maybe<Scalars['Float']>;
  unit_of_measure_id: Maybe<Scalars['String']>;
};

export type ProjectedRevenueV2Gql = {
  __typename?: 'ProjectedRevenueV2GQL';
  date: Maybe<Scalars['String']>;
  projected_revenue: Maybe<Scalars['Float']>;
};

/** Node and relay Connection. */
export type RegionV2GqlConnection = {
  __typename?: 'RegionV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<RegionV2GqlEdge>>;
};

/** A Relay edge containing a `RegionV2GQL` and its cursor. */
export type RegionV2GqlEdge = {
  __typename?: 'RegionV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<RegionV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Node and relay Connection. */
export type AreaV2GqlConnection = {
  __typename?: 'AreaV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AreaV2GqlEdge>>;
};

/** A Relay edge containing a `AreaV2GQL` and its cursor. */
export type AreaV2GqlEdge = {
  __typename?: 'AreaV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<AreaV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Node and relay Connection. */
export type DepotV2GqlConnection = {
  __typename?: 'DepotV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DepotV2GqlEdge>>;
};

/** A Relay edge containing a `DepotV2GQL` and its cursor. */
export type DepotV2GqlEdge = {
  __typename?: 'DepotV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<DepotV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Route List. */
export enum RouteType {
  Delivery = 'DELIVERY',
  Outermarket = 'OUTERMARKET',
  Courier = 'COURIER',
  Staff = 'STAFF'
}

/** Node and relay Connection. */
export type RouteV2GqlConnection = {
  __typename?: 'RouteV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<RouteV2GqlEdge>>;
};

/** A Relay edge containing a `RouteV2GQL` and its cursor. */
export type RouteV2GqlEdge = {
  __typename?: 'RouteV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<RouteV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Node and relay Connection. */
export type RouteTeamV2GqlConnection = {
  __typename?: 'RouteTeamV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<RouteTeamV2GqlEdge>>;
};

/** A Relay edge containing a `RouteTeamV2GQL` and its cursor. */
export type RouteTeamV2GqlEdge = {
  __typename?: 'RouteTeamV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<RouteTeamV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Route Team GQL. */
export type RouteTeamV2Gql = {
  __typename?: 'RouteTeamV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  route_team_id: Scalars['String'];
  route_id: Scalars['String'];
  sale_date: Scalars['String'];
  route: Maybe<RouteV2Gql>;
  route_team_members: Maybe<Array<Maybe<RouteTeamMemberV2Gql>>>;
};

/** Route Team Member GQL. */
export type RouteTeamMemberV2Gql = {
  __typename?: 'RouteTeamMemberV2GQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  route_team_member_id: Scalars['String'];
  route_team_id: Scalars['String'];
  user_id: Scalars['String'];
  sale_date: Scalars['String'];
  route_team: Maybe<RouteTeamV2Gql>;
  user: Maybe<UserV2Gql>;
};

/** Node and relay Connection. */
export type RouteTeamMemberV2GqlConnection = {
  __typename?: 'RouteTeamMemberV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<RouteTeamMemberV2GqlEdge>>;
};

/** A Relay edge containing a `RouteTeamMemberV2GQL` and its cursor. */
export type RouteTeamMemberV2GqlEdge = {
  __typename?: 'RouteTeamMemberV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<RouteTeamMemberV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Pagination Connection for CustomerV2GQL */
export type CustomerV2GqlConnection = {
  __typename?: 'CustomerV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CustomerV2GqlEdge>>;
};

/** A Relay edge containing a `CustomerV2GQL` and its cursor. */
export type CustomerV2GqlEdge = {
  __typename?: 'CustomerV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<CustomerV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Pagination Connection for ShopV2GQL */
export type ShopV2GqlConnection = {
  __typename?: 'ShopV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ShopV2GqlEdge>>;
};

/** A Relay edge containing a `ShopV2GQL` and its cursor. */
export type ShopV2GqlEdge = {
  __typename?: 'ShopV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<ShopV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Pagination Connection for VendorKYCGQL */
export type VendorKycgqlConnection = {
  __typename?: 'VendorKYCGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VendorKycgqlEdge>>;
};

/** A Relay edge containing a `VendorKYCGQL` and its cursor. */
export type VendorKycgqlEdge = {
  __typename?: 'VendorKYCGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<VendorKycgql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ShopDeliveryFeeGql = {
  __typename?: 'ShopDeliveryFeeGQL';
  shop_id: Maybe<Scalars['String']>;
  delivery_fee: Maybe<Scalars['Float']>;
};

export type DispatchGqlConnection = {
  __typename?: 'DispatchGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DispatchGqlEdge>>;
};

/** A Relay edge containing a `DispatchGQL` and its cursor. */
export type DispatchGqlEdge = {
  __typename?: 'DispatchGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<DispatchGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type DispatchGql = Node & {
  __typename?: 'DispatchGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  dispatch_id: Scalars['String'];
  dispatch_number: Scalars['String'];
  depot_id: Scalars['String'];
  sale_date: Scalars['String'];
  dispatch_type: DispatchType;
  stock_transfer_id: Maybe<Scalars['String']>;
  cancellation_reason: Maybe<Scalars['String']>;
  dispatch_items: Maybe<Array<Maybe<DispatchItemGql>>>;
  dispatch: Maybe<DispatchItemGql>;
  /** The ID of the object. */
  id: Scalars['ID'];
  total_products: Maybe<Scalars['Float']>;
  depot: Maybe<DepotV2Gql>;
  user: Maybe<UserV2Gql>;
};

/** An enumeration. */
export enum DispatchType {
  Dispatch = 'DISPATCH',
  StockTransfer = 'STOCK_TRANSFER'
}

export type DispatchItemGql = {
  __typename?: 'DispatchItemGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  dispatch_item_id: Scalars['String'];
  dispatch_id: Scalars['String'];
  route_id: Scalars['String'];
  product_item_id: Scalars['String'];
  unit_of_measure_id: Scalars['String'];
  quantity: Scalars['Float'];
  weight: Scalars['Float'];
  packaging_unit_id: Maybe<Scalars['String']>;
  packaging_unit_quantity: Maybe<Scalars['Int']>;
  cancellation_reason: Maybe<Scalars['String']>;
  dispatch: Maybe<DispatchGql>;
  dispatch_items: Maybe<DispatchGql>;
  route: Maybe<RouteV2Gql>;
  product_item: Maybe<ProductItemGql>;
  uom: Maybe<Uomgql>;
  packaging_unit: Maybe<PackagingUnitGql>;
};

export type DispatchItemGqlConnection = {
  __typename?: 'DispatchItemGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DispatchItemGqlEdge>>;
};

/** A Relay edge containing a `DispatchItemGQL` and its cursor. */
export type DispatchItemGqlEdge = {
  __typename?: 'DispatchItemGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<DispatchItemGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type StockTransferGqlConnection = {
  __typename?: 'StockTransferGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StockTransferGqlEdge>>;
};

/** A Relay edge containing a `StockTransferGQL` and its cursor. */
export type StockTransferGqlEdge = {
  __typename?: 'StockTransferGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<StockTransferGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type StockTransferGql = Node & {
  __typename?: 'StockTransferGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  stock_transfer_id: Scalars['String'];
  stock_transfer_number: Scalars['String'];
  sale_date: Scalars['String'];
  product_item_id: Scalars['String'];
  depot_id: Scalars['String'];
  route_id_from: Scalars['String'];
  cancellation_reason: Maybe<Scalars['String']>;
  stock_transfer_items: Maybe<Array<Maybe<StockTransferItemGql>>>;
  stock_transfer: Maybe<StockTransferItemGql>;
  /** The ID of the object. */
  id: Scalars['ID'];
  route_from: Maybe<RouteV2Gql>;
  product_item: Maybe<ProductItemGql>;
  user: Maybe<UserV2Gql>;
};

export type StockTransferItemGql = {
  __typename?: 'StockTransferItemGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  stock_transfer_item_id: Scalars['String'];
  stock_transfer_id: Scalars['String'];
  unit_of_measure_id: Scalars['String'];
  quantity: Scalars['Float'];
  packaging_unit_id: Maybe<Scalars['String']>;
  packaging_unit_quantity: Maybe<Scalars['Int']>;
  route_id_to: Scalars['String'];
  stock_transfer: Maybe<StockTransferGql>;
  stock_transfer_items: Maybe<StockTransferGql>;
  route_to: Maybe<RouteV2Gql>;
  uom: Maybe<Uomgql>;
  packaging_unit: Maybe<PackagingUnitGql>;
};

export type StockTransferItemGqlConnection = {
  __typename?: 'StockTransferItemGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StockTransferItemGqlEdge>>;
};

/** A Relay edge containing a `StockTransferItemGQL` and its cursor. */
export type StockTransferItemGqlEdge = {
  __typename?: 'StockTransferItemGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<StockTransferItemGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type DispatchBalanceGql = {
  __typename?: 'DispatchBalanceGQL';
  route_id: Maybe<Scalars['String']>;
  product_item_id: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
  stock_balance: Maybe<Scalars['Float']>;
  packaging_balance: Maybe<Scalars['Float']>;
  product_item: Maybe<ProductItemGql>;
};

export type DepotIntakeGqlConnection = {
  __typename?: 'DepotIntakeGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DepotIntakeGqlEdge>>;
};

/** A Relay edge containing a `DepotIntakeGQL` and its cursor. */
export type DepotIntakeGqlEdge = {
  __typename?: 'DepotIntakeGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<DepotIntakeGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type DepotIntakeGql = Node & {
  __typename?: 'DepotIntakeGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  depot_intake_id: Scalars['String'];
  depot_intake_number: Scalars['String'];
  sale_date: Scalars['String'];
  depot_id: Scalars['String'];
  route_id: Scalars['String'];
  cancellation_reason: Maybe<Scalars['String']>;
  depot_intake_items: Maybe<Array<Maybe<DepotIntakeItemGql>>>;
  depot_intake: Maybe<DepotIntakeItemGql>;
  /** The ID of the object. */
  id: Scalars['ID'];
  route: Maybe<RouteV2Gql>;
  user: Maybe<UserV2Gql>;
};

export type DepotIntakeItemGql = {
  __typename?: 'DepotIntakeItemGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  depot_intake_item_id: Scalars['String'];
  depot_intake_id: Scalars['String'];
  product_id: Scalars['String'];
  product_item_id: Scalars['String'];
  quantity: Scalars['Float'];
  unit_of_measure_id: Scalars['String'];
  packaging_unit_id: Maybe<Scalars['String']>;
  packaging_unit_quantity: Maybe<Scalars['Int']>;
  depot_intake: Maybe<DepotIntakeGql>;
  depot_intake_item: Maybe<DepotIntakeGql>;
  uom: Maybe<Uomgql>;
  product: Maybe<ProductGql>;
  product_item: Maybe<ProductItemGql>;
};

export type DepotIntakeItemGqlConnection = {
  __typename?: 'DepotIntakeItemGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DepotIntakeItemGqlEdge>>;
};

/** A Relay edge containing a `DepotIntakeItemGQL` and its cursor. */
export type DepotIntakeItemGqlEdge = {
  __typename?: 'DepotIntakeItemGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<DepotIntakeItemGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ReturnGqlConnection = {
  __typename?: 'ReturnGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ReturnGqlEdge>>;
};

/** A Relay edge containing a `ReturnGQL` and its cursor. */
export type ReturnGqlEdge = {
  __typename?: 'ReturnGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<ReturnGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ReturnGql = Node & {
  __typename?: 'ReturnGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  distribution_center_id: Maybe<Scalars['String']>;
  return_id: Scalars['String'];
  return_number: Scalars['String'];
  sale_date: Scalars['String'];
  depot_id: Scalars['String'];
  route_id: Maybe<Scalars['String']>;
  return_level: ReturnLevel;
  cancellation_reason: Maybe<Scalars['String']>;
  route_plan_id: Maybe<Scalars['String']>;
  product_return_items: Maybe<Array<Maybe<ProductReturnItemGql>>>;
  packaging_return_items: Maybe<Array<Maybe<PackagingReturnItemGql>>>;
  /** The ID of the object. */
  id: Scalars['ID'];
  route: Maybe<RouteV2Gql>;
  depot: Maybe<DepotV2Gql>;
  user: Maybe<UserV2Gql>;
  distribution_center: Maybe<DistributionCenterGql>;
};

/** An enumeration. */
export enum ReturnLevel {
  Depot = 'DEPOT',
  PackHouse = 'PACK_HOUSE'
}

export type ProductReturnItemGql = {
  __typename?: 'ProductReturnItemGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  product_return_item_id: Scalars['String'];
  return_id: Scalars['String'];
  product_item_id: Scalars['String'];
  unit_of_measure_id: Scalars['String'];
  quantity: Scalars['Float'];
  cancellation_reason: Maybe<Scalars['String']>;
  return_type: Maybe<ReturnType>;
  returns: Maybe<ReturnGql>;
  uom: Maybe<Uomgql>;
  product_item: Maybe<ProductItemGql>;
};

/** An enumeration. */
export enum ReturnType {
  Disposed = 'DISPOSED',
  Resale = 'RESALE'
}

export type PackagingReturnItemGql = {
  __typename?: 'PackagingReturnItemGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  packaging_return_item_id: Scalars['String'];
  return_id: Scalars['String'];
  quantity: Scalars['Float'];
  packaging_unit_id: Maybe<Scalars['String']>;
  cancellation_reason: Maybe<Scalars['String']>;
  returns: Maybe<ReturnGql>;
  packaging_unit: Maybe<PackagingUnitGql>;
};

export type ProductReturnItemGqlConnection = {
  __typename?: 'ProductReturnItemGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductReturnItemGqlEdge>>;
};

/** A Relay edge containing a `ProductReturnItemGQL` and its cursor. */
export type ProductReturnItemGqlEdge = {
  __typename?: 'ProductReturnItemGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<ProductReturnItemGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PackagingReturnItemGqlConnection = {
  __typename?: 'PackagingReturnItemGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PackagingReturnItemGqlEdge>>;
};

/** A Relay edge containing a `PackagingReturnItemGQL` and its cursor. */
export type PackagingReturnItemGqlEdge = {
  __typename?: 'PackagingReturnItemGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<PackagingReturnItemGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type DispatchProductSummaryV2GqlConnection = {
  __typename?: 'DispatchProductSummaryV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DispatchProductSummaryV2GqlEdge>>;
};

/** A Relay edge containing a `DispatchProductSummaryV2GQL` and its cursor. */
export type DispatchProductSummaryV2GqlEdge = {
  __typename?: 'DispatchProductSummaryV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<DispatchProductSummaryV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type DispatchProductSummaryV2Gql = {
  __typename?: 'DispatchProductSummaryV2GQL';
  date: Maybe<Scalars['String']>;
  product_item_id: Maybe<Scalars['String']>;
  dispatch_quantity: Maybe<Scalars['Float']>;
  intake_quantity: Maybe<Scalars['Float']>;
  variance: Maybe<Scalars['Float']>;
};

export type ProjectedPhRevenueV2Gql = {
  __typename?: 'ProjectedPhRevenueV2GQL';
  date: Maybe<Scalars['String']>;
  projected_ph_revenue: Maybe<Scalars['Float']>;
};

export type VehicleStockAllocationGqlConnection = {
  __typename?: 'VehicleStockAllocationGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VehicleStockAllocationGqlEdge>>;
};

/** A Relay edge containing a `VehicleStockAllocationGQL` and its cursor. */
export type VehicleStockAllocationGqlEdge = {
  __typename?: 'VehicleStockAllocationGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<VehicleStockAllocationGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type VehicleStockAllocationGql = {
  __typename?: 'VehicleStockAllocationGQL';
  date_created: Scalars['DateTime'];
  created_by: Scalars['String'];
  date_updated: Scalars['DateTime'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  vehicle_stock_allocation_id: Scalars['String'];
  delivery_date: Scalars['String'];
  product_id: Maybe<Scalars['String']>;
  product_item_id: Scalars['String'];
  depot_id: Scalars['String'];
  route_plan_id: Scalars['String'];
  quantity: Scalars['Float'];
  packaging_unit_id: Maybe<Scalars['String']>;
  packaging_unit_quantity: Maybe<Scalars['Int']>;
  unit_of_measure_id: Scalars['String'];
  weight: Scalars['Float'];
  confirmed: Maybe<Scalars['Boolean']>;
  depot: Maybe<DepotV2Gql>;
  route_plan: Maybe<RoutePlanGql>;
  product_item: Maybe<ProductItemGql>;
  packaging_unit: Maybe<PackagingUnitGql>;
  uom: Maybe<Uomgql>;
};

/** Pagination Connection for SokoLoanRepaymentGQL */
export type SokoLoanRepaymentGqlConnection = {
  __typename?: 'SokoLoanRepaymentGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  edges: Array<Maybe<SokoLoanRepaymentGqlEdge>>;
};

export type SokoLoanRepaymentGqlEdge = {
  __typename?: 'SokoLoanRepaymentGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<SokoLoanRepaymentGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type SokoLoanRepaymentGql = {
  __typename?: 'SokoLoanRepaymentGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  payload_sent: Maybe<Scalars['JSONString']>;
  payload_received: Maybe<Scalars['JSONString']>;
  completed: Scalars['Boolean'];
  attempts: Scalars['Int'];
  sokoloan_repayment_id: Scalars['String'];
  loan_confirmation_id: Scalars['String'];
  partner_id: Scalars['String'];
  reference_number: Maybe<Scalars['String']>;
  loan_reference_id: Scalars['String'];
  amount: Scalars['Float'];
  payment_date: Scalars['String'];
  partner_payment_reference: Maybe<Scalars['String']>;
  forwarded: Scalars['Boolean'];
  payment_mode: Scalars['String'];
  loan_confirmation: Maybe<LoanGql>;
};

export type LoanGql = {
  __typename?: 'LoanGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  loan_confirmation_id: Scalars['String'];
  delivery_callback_id: Maybe<Scalars['String']>;
  delivery_id: Maybe<Scalars['String']>;
  delivery_amount: Maybe<Scalars['Float']>;
  loaned_amount: Maybe<Scalars['Float']>;
  loan_reference_id: Maybe<Scalars['String']>;
  loan_status: Maybe<Scalars['Boolean']>;
  due_amount: Maybe<Scalars['Float']>;
  due_date: Maybe<Scalars['DateTime']>;
  offer_date: Maybe<Scalars['DateTime']>;
  receipt_no: Maybe<Scalars['String']>;
  reported_balance: Maybe<Scalars['Float']>;
  loan_offer_id: Maybe<Scalars['String']>;
  rejection_reason_id: Maybe<Scalars['String']>;
  partner_id: Maybe<Scalars['String']>;
  charge: Scalars['Float'];
  delivery_callback: Maybe<DeliveryCallbackGql>;
  partner: Maybe<PartnerGql>;
  rejection_reason: Maybe<LoanRejectionReasonGql>;
  repayments: Maybe<Array<Maybe<LoanRepaymentGql>>>;
  loan_offer: Maybe<LoanOfferGql>;
};

export type DeliveryCallbackGql = {
  __typename?: 'DeliveryCallbackGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  payload_sent: Maybe<Scalars['JSONString']>;
  payload_received: Maybe<Scalars['JSONString']>;
  completed: Scalars['Boolean'];
  attempts: Scalars['Int'];
  delivery_callback_id: Scalars['String'];
  partner_id: Maybe<Scalars['String']>;
  customer_id: Maybe<Scalars['String']>;
  fintech_delivery_id: Maybe<Scalars['String']>;
  delivery_id: Maybe<Scalars['String']>;
  receipt_no: Maybe<Scalars['String']>;
  partner: Maybe<PartnerGql>;
  delivery: Maybe<FintechDeliveryGql>;
  loan_confirmation: Maybe<Array<Maybe<LoanGql>>>;
};

/** Fintech Partner GQL Type */
export type PartnerGql = {
  __typename?: 'PartnerGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  partner_id: Scalars['String'];
  name: Maybe<Scalars['String']>;
  auth_token: Maybe<Scalars['String']>;
  delivery_callback_url: Maybe<Scalars['String']>;
  lead_callback_url: Maybe<Scalars['String']>;
  loan_request_url: Maybe<Scalars['String']>;
  loan_query_url: Maybe<Scalars['String']>;
  repayment_callback_url: Maybe<Scalars['String']>;
  options: Maybe<Scalars['JSONString']>;
  product_name: Maybe<Scalars['String']>;
  blacklisted_routes: Maybe<Array<Maybe<Scalars['String']>>>;
  subscribed_routes: Maybe<Array<Maybe<Scalars['String']>>>;
  payment_info: Maybe<Scalars['JSONString']>;
  is_charged: Scalars['Boolean'];
  summary: Maybe<Scalars['String']>;
  delivery_callbacks: Maybe<Array<Maybe<DeliveryCallbackGql>>>;
  customers: Maybe<Array<Maybe<FintechCustomerGql>>>;
  loans: Maybe<Array<Maybe<LoanGql>>>;
  can_receive_payment: Maybe<Scalars['Boolean']>;
};

export type FintechCustomerGql = {
  __typename?: 'FintechCustomerGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  fintech_customer_id: Scalars['String'];
  customer_number: Maybe<Scalars['String']>;
  full_name: Maybe<Scalars['String']>;
  phone_number: Maybe<Scalars['String']>;
  legal_name: Maybe<Scalars['String']>;
  document_number: Maybe<Scalars['String']>;
  document_type: Maybe<Scalars['String']>;
  date_registered: Maybe<Scalars['String']>;
  opt_in: Maybe<Scalars['Boolean']>;
  lead_callback_id: Maybe<Scalars['String']>;
  partners: Maybe<Array<Maybe<PartnerGql>>>;
  deliveries: Maybe<Array<Maybe<FintechDeliveryGql>>>;
  total_deliveries: Maybe<Scalars['Int']>;
  total_loans: Maybe<Scalars['Int']>;
  total_delivery_amount: Maybe<Scalars['Float']>;
  total_loan_amount_received: Maybe<Scalars['Float']>;
};

export type FintechDeliveryGql = {
  __typename?: 'FintechDeliveryGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  fintech_delivery_id: Scalars['String'];
  delivery_id: Maybe<Scalars['String']>;
  customer_id: Maybe<Scalars['String']>;
  stall_id: Maybe<Scalars['String']>;
  route_id: Maybe<Scalars['String']>;
  route_team_id: Maybe<Scalars['String']>;
  amount: Maybe<Scalars['Float']>;
  receipt_no: Maybe<Scalars['String']>;
  till_number: Maybe<Scalars['String']>;
  date: Maybe<Scalars['DateTime']>;
  delivery_data: Maybe<Scalars['JSONString']>;
  assigned_partner_id: Maybe<Scalars['String']>;
  customer: Maybe<FintechCustomerGql>;
  assigned_partner: Maybe<PartnerGql>;
  delivery_callbacks: Maybe<Array<Maybe<DeliveryCallbackGql>>>;
  route_team_members: Maybe<Array<Maybe<RouteTeamMemberGql>>>;
};

export type RouteTeamMemberGql = {
  __typename?: 'RouteTeamMemberGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  route_team_member_id: Scalars['String'];
  fintech_delivery_id: Maybe<Scalars['String']>;
  route_team_id: Maybe<Scalars['String']>;
  phone_number: Maybe<Scalars['String']>;
  user_id: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  last_name: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  user_no: Maybe<Scalars['String']>;
  delivery: Maybe<FintechDeliveryGql>;
};

export type LoanRejectionReasonGql = {
  __typename?: 'LoanRejectionReasonGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  loan_rejection_reason_id: Scalars['String'];
  code: Scalars['String'];
  description: Scalars['String'];
  message: Maybe<Scalars['String']>;
};

export type LoanRepaymentGql = {
  __typename?: 'LoanRepaymentGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  loan_repayment_id: Scalars['String'];
  loan_confirmation_id: Maybe<Scalars['String']>;
  loan_reference_id: Maybe<Scalars['String']>;
  loan_amount: Maybe<Scalars['Float']>;
  amount_paid: Maybe<Scalars['Float']>;
  loan_balance: Maybe<Scalars['Float']>;
  paid_datetime: Maybe<Scalars['DateTime']>;
  due_date: Maybe<Scalars['DateTime']>;
  receipt_no: Maybe<Scalars['String']>;
  partner_id: Maybe<Scalars['String']>;
  loan_confirmation: Maybe<LoanGql>;
};

export type LoanOfferGql = {
  __typename?: 'LoanOfferGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  loan_offer_id: Scalars['String'];
  partner_id: Scalars['String'];
  delivery_callback_id: Maybe<Scalars['String']>;
  delivery_id: Scalars['String'];
  offer_amount: Scalars['Float'];
  offer_status: Scalars['Boolean'];
  receipt_no: Maybe<Scalars['String']>;
  offer_expiry: Scalars['DateTime'];
  limit_amount: Maybe<Scalars['Float']>;
  offer_reference_id: Scalars['String'];
  offer_date: Scalars['DateTime'];
  loan_terms: Scalars['JSONString'];
  rejection_reason_id: Maybe<Scalars['String']>;
  rejection_reason: Maybe<LoanRejectionReasonGql>;
  partner: Maybe<PartnerGql>;
  loan_request: Maybe<LoanRequestGql>;
};

export type LoanRequestGql = {
  __typename?: 'LoanRequestGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  payload_sent: Maybe<Scalars['JSONString']>;
  payload_received: Maybe<Scalars['JSONString']>;
  completed: Scalars['Boolean'];
  attempts: Scalars['Int'];
  loan_request_id: Scalars['String'];
  customer_id: Scalars['String'];
  partner_id: Scalars['String'];
  delivery_id: Scalars['String'];
  loan_amount: Scalars['Float'];
  loan_offer_id: Maybe<Scalars['String']>;
  date_initiated: Scalars['DateTime'];
  loan_offer: Maybe<LoanOfferGql>;
  partner: Maybe<PartnerGql>;
  customer: Maybe<FintechCustomerGql>;
};

export type LeadCallbackGqlConnection = {
  __typename?: 'LeadCallbackGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  edges: Array<Maybe<LeadCallbackGqlEdge>>;
};

export type LeadCallbackGqlEdge = {
  __typename?: 'LeadCallbackGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<LeadCallbackGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type LeadCallbackGql = {
  __typename?: 'LeadCallbackGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  payload_sent: Maybe<Scalars['JSONString']>;
  payload_received: Maybe<Scalars['JSONString']>;
  completed: Scalars['Boolean'];
  attempts: Scalars['Int'];
  lead_callback_id: Scalars['String'];
  partner_id: Maybe<Scalars['String']>;
  customer_id: Scalars['String'];
  shop_id: Scalars['String'];
  customer_data: Scalars['JSONString'];
  partner: Maybe<PartnerGql>;
};

/** Pagination Connection for LoanGQL */
export type LoanGqlConnection = {
  __typename?: 'LoanGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  edges: Array<Maybe<LoanGqlEdge>>;
};

export type LoanGqlEdge = {
  __typename?: 'LoanGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<LoanGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Pagination Connection for LoanOfferGQL */
export type LoanOfferGqlConnection = {
  __typename?: 'LoanOfferGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  edges: Array<Maybe<LoanOfferGqlEdge>>;
};

export type LoanOfferGqlEdge = {
  __typename?: 'LoanOfferGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<LoanOfferGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Pagination Connection for LoanRequestGQL */
export type LoanRequestGqlConnection = {
  __typename?: 'LoanRequestGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  edges: Array<Maybe<LoanRequestGqlEdge>>;
};

export type LoanRequestGqlEdge = {
  __typename?: 'LoanRequestGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<LoanRequestGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PartnerLoanQueryGql = {
  __typename?: 'PartnerLoanQueryGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  payload_sent: Maybe<Scalars['JSONString']>;
  payload_received: Maybe<Scalars['JSONString']>;
  completed: Scalars['Boolean'];
  attempts: Scalars['Int'];
  partner_loan_query_id: Scalars['String'];
  limit_amount: Scalars['Float'];
  limit_date: Scalars['DateTime'];
  loan_balance: Scalars['Float'];
  customer_id: Scalars['String'];
  partner_id: Scalars['String'];
  partner: Maybe<PartnerGql>;
  customer: Maybe<FintechCustomerGql>;
};

/** Pagination Connection for FintechDeliveryGQL */
export type FintechDeliveryGqlConnection = {
  __typename?: 'FintechDeliveryGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  edges: Array<Maybe<FintechDeliveryGqlEdge>>;
};

export type FintechDeliveryGqlEdge = {
  __typename?: 'FintechDeliveryGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<FintechDeliveryGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Pagination Connection for FintechCustomerGQL */
export type FintechCustomerGqlConnection = {
  __typename?: 'FintechCustomerGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  edges: Array<Maybe<FintechCustomerGqlEdge>>;
};

export type FintechCustomerGqlEdge = {
  __typename?: 'FintechCustomerGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<FintechCustomerGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Node and relay Connection. */
export type NotificationTemplateGqlConnection = {
  __typename?: 'NotificationTemplateGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  edges: Array<Maybe<NotificationTemplateGqlEdge>>;
};

export type NotificationTemplateGqlEdge = {
  __typename?: 'NotificationTemplateGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<NotificationTemplateGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** NotificationTemplate GQL. */
export type NotificationTemplateGql = {
  __typename?: 'NotificationTemplateGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Maybe<Scalars['String']>;
  updated_by: Maybe<Scalars['String']>;
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  template_id: Scalars['String'];
  template_name: Scalars['String'];
  description: Scalars['String'];
  template_string: Scalars['String'];
};

/** Node and relay Connection. */
export type NotificationMessageGqlConnection = {
  __typename?: 'NotificationMessageGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  edges: Array<Maybe<NotificationMessageGqlEdge>>;
};

export type NotificationMessageGqlEdge = {
  __typename?: 'NotificationMessageGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<NotificationMessageGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** NotificationMessage GQL. */
export type NotificationMessageGql = {
  __typename?: 'NotificationMessageGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Maybe<Scalars['String']>;
  updated_by: Maybe<Scalars['String']>;
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  notification_id: Scalars['String'];
  title: Scalars['String'];
  message: Scalars['String'];
  user_id: Scalars['String'];
  service_name: Maybe<Scalars['String']>;
  topic: Maybe<Scalars['String']>;
  read: Scalars['Boolean'];
  data: Maybe<Scalars['JSONString']>;
};

/** Node and relay Connection. */
export type NotificationProviderGqlConnection = {
  __typename?: 'NotificationProviderGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  edges: Array<Maybe<NotificationProviderGqlEdge>>;
};

export type NotificationProviderGqlEdge = {
  __typename?: 'NotificationProviderGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<NotificationProviderGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Provider GQL. */
export type NotificationProviderGql = {
  __typename?: 'NotificationProviderGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Maybe<Scalars['String']>;
  updated_by: Maybe<Scalars['String']>;
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  provider_id: Scalars['String'];
  name: Scalars['String'];
};

/** Pagination Connection for PermissionV2GQL */
export type PermissionV2GqlConnection = {
  __typename?: 'PermissionV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  edges: Array<Maybe<PermissionV2GqlEdge>>;
};

export type PermissionV2GqlEdge = {
  __typename?: 'PermissionV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<PermissionV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Pagination Connection for UserV2GQL */
export type UserV2GqlConnection = {
  __typename?: 'UserV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  edges: Array<Maybe<UserV2GqlEdge>>;
};

export type UserV2GqlEdge = {
  __typename?: 'UserV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<UserV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Pagination Connection for RoleV2GQL */
export type RoleV2GqlConnection = {
  __typename?: 'RoleV2GQLConnection';
  page_info: Maybe<PaginatorInfo>;
  edges: Array<Maybe<RoleV2GqlEdge>>;
};

export type RoleV2GqlEdge = {
  __typename?: 'RoleV2GQLEdge';
  /** The item at the end of the edge */
  node: Maybe<RoleV2Gql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Pagination Connection for VehicleTypeGQL */
export type VehicleTypeGqlConnection = {
  __typename?: 'VehicleTypeGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VehicleTypeGqlEdge>>;
};

/** A Relay edge containing a `VehicleTypeGQL` and its cursor. */
export type VehicleTypeGqlEdge = {
  __typename?: 'VehicleTypeGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<VehicleTypeGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Pagination Connection for VehicleGQL  */
export type VehicleGqlConnection = {
  __typename?: 'VehicleGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VehicleGqlEdge>>;
};

/** A Relay edge containing a `VehicleGQL` and its cursor. */
export type VehicleGqlEdge = {
  __typename?: 'VehicleGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<VehicleGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type RoutePlanGqlConnection = {
  __typename?: 'RoutePlanGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<RoutePlanGqlEdge>>;
};

/** A Relay edge containing a `RoutePlanGQL` and its cursor. */
export type RoutePlanGqlEdge = {
  __typename?: 'RoutePlanGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<RoutePlanGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Pagination Connection for Fulfillment Team GQL  */
export type FulfillmentTeamGqlConnection = {
  __typename?: 'FulfillmentTeamGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FulfillmentTeamGqlEdge>>;
};

/** A Relay edge containing a `FulfillmentTeamGQL` and its cursor. */
export type FulfillmentTeamGqlEdge = {
  __typename?: 'FulfillmentTeamGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<FulfillmentTeamGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type StaticRouteGqlConnection = {
  __typename?: 'StaticRouteGQLConnection';
  page_info: Maybe<PaginatorInfo>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StaticRouteGqlEdge>>;
};

/** A Relay edge containing a `StaticRouteGQL` and its cursor. */
export type StaticRouteGqlEdge = {
  __typename?: 'StaticRouteGQLEdge';
  /** The item at the end of the edge */
  node: Maybe<StaticRouteGql>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type StaticRouteGql = {
  __typename?: 'StaticRouteGQL';
  date_created: Scalars['DateTime'];
  date_updated: Scalars['DateTime'];
  created_by: Scalars['String'];
  updated_by: Scalars['String'];
  client_id: Maybe<Scalars['String']>;
  client_stamp: Maybe<Scalars['String']>;
  client_timestamp: Maybe<Scalars['DateTime']>;
  client_info: Maybe<Scalars['JSONString']>;
  active: Scalars['Boolean'];
  deleted_at: Maybe<Scalars['DateTime']>;
  meta: Maybe<Scalars['JSONString']>;
  static_route_id: Scalars['String'];
  delivery_date: Scalars['String'];
  status: Scalars['String'];
  route_name: Scalars['String'];
  route_id: Scalars['String'];
  distance: Scalars['Float'];
  path: Scalars['String'];
  shops: Array<Maybe<Scalars['JSONString']>>;
  purged_shops: Maybe<Array<Maybe<Scalars['JSONString']>>>;
  flagged_shops: Maybe<Array<Maybe<Scalars['JSONString']>>>;
  total_amount: Scalars['Float'];
  revenue_per_kilometer: Scalars['Float'];
  errors: Maybe<Array<Maybe<Scalars['JSONString']>>>;
};

export type DepotsQueryVariables = Exact<{ [key: string]: never; }>;


export type DepotsQuery = (
  { __typename?: 'Query' }
  & { depots_v2: Maybe<(
    { __typename?: 'DepotV2GQLConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'DepotV2GQLEdge' }
      & { node: Maybe<(
        { __typename?: 'DepotV2GQL' }
        & Pick<DepotV2Gql, 'depot_id' | 'depot_name'>
        & { routes: Maybe<Array<Maybe<(
          { __typename?: 'RouteV2GQL' }
          & Pick<RouteV2Gql, 'route_id' | 'route_name'>
        )>>> }
      )> }
    )>> }
  )> }
);


export const DepotsDocument = gql`
    query depots {
  depots_v2 {
    edges {
      node {
        depot_id
        depot_name
        routes {
          route_id
          route_name
        }
      }
    }
  }
}
    `;

/**
 * __useDepotsQuery__
 *
 * To run a query within a React component, call `useDepotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDepotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDepotsQuery({
 *   variables: {
 *   },
 * });
 */
export function useDepotsQuery(baseOptions?: Apollo.QueryHookOptions<DepotsQuery, DepotsQueryVariables>) {
        return Apollo.useQuery<DepotsQuery, DepotsQueryVariables>(DepotsDocument, baseOptions);
      }
export function useDepotsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DepotsQuery, DepotsQueryVariables>) {
          return Apollo.useLazyQuery<DepotsQuery, DepotsQueryVariables>(DepotsDocument, baseOptions);
        }
export type DepotsQueryHookResult = ReturnType<typeof useDepotsQuery>;
export type DepotsLazyQueryHookResult = ReturnType<typeof useDepotsLazyQuery>;
export type DepotsQueryResult = Apollo.QueryResult<DepotsQuery, DepotsQueryVariables>;