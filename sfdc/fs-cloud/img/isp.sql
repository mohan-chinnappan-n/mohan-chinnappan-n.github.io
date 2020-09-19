SELECT Id, SubscriberPackageId, SubscriberPackage.NamespacePrefix,
      SubscriberPackage.Name, SubscriberPackageVersion.Id,
      SubscriberPackageVersion.Name, SubscriberPackageVersion.MajorVersion,
      SubscriberPackageVersion.MinorVersion,
      SubscriberPackageVersion.PatchVersion,
      SubscriberPackageVersion.BuildNumber
   FROM InstalledSubscriberPackage
   ORDER BY SubscriberPackageId
