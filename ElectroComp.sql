SELECT Distinct
       S.[Code] As 'ItemCode'
      ,S.[Description_1] As 'ItemDescription'
      ,S.[ItemGroup] As 'ItemGroup'
      ,S.[Major Category] As 'MajorCategory'
      ,S.[Manufacturer  Name ] As 'Manufacturer'
      ,S.[Manufacturers part number ] As 'ManufacturerPart'
      ,S.[Part datasheet (Link)] As 'Datasheet'
      ,S.[AveUCst] As 'AverageCost'
      ,S.[Qty_On_Hand]As 'QtyOnHand'
      ,S.[ReservedQty]As 'ReserveQty'
      ,S.[QtyOnPO] As 'QtyOnPurchaseOrder'
      ,S.[QtyOnSO]As 'QtyOnSalesOrder'
      ,S.[ServiceItem] As 'IsServiceItem'
      ,S.[DefaultSupplierName]As 'DefaultSupplier'
      ,P.[DefaultPriceIncl] As 'InclusivePrice'
        FROM [Electrocomp_JHB].[dbo].[_bvStockAndWhseItemsExPL] S, [Electrocomp_JHB].[dbo].[_bvStockFull] P
        Where S.[Public e-commerce item] = 1 and S.[ItemActive] = 1 And S.StockLink = P.StockLink