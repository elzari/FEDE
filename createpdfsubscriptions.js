var obj = JSON.parse($response.body);

obj = 

{
  "subscriptions" : [
    {
      "subscription_name" : "PDFPack",
      "subscription_state" : "ACTIVE",
      "biz_source" : "",
      "billing_term" : null,
      "sub_ref" : null,
      "subscription_level" : "Plus"
    },
    {
      "subscription_name" : "Review",
      "subscription_state" : "ACTIVE",
      "biz_source" : "",
      "billing_term" : null,
      "sub_ref" : "1CC779D8644528585B1A",
      "subscription_level" : "Free"
    }
  ]
}
$done({body: JSON.stringify(obj)});