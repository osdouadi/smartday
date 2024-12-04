import SEOSettingsForm from "@/components/forms/seo-settings-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslations } from 'next-intl';
import React from 'react'

const SEOSettings = () => {
  const tSettigns = useTranslations("dashboard.settings");
  return (
    <Card>
      <CardHeader className="md:-mb-5">
        <CardTitle>{tSettigns("SEOSettingsTitle")}</CardTitle>
        <CardDescription>{tSettigns("SEOSettingsDescription")}</CardDescription>
      </CardHeader>
      <CardContent>
        <SEOSettingsForm/>
      </CardContent>
    </Card>
  );
};

export default SEOSettings;