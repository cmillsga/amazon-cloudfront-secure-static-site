
aws s3 cp --recursive . s3://thesupersupersf-org/

aws cloudformation create-stack --stack-name thesupersupersforg --template-url https://thesupersupersf-org.s3.us-east-1.amazonaws.com/templates/main.yaml  --capabilities CAPABILITY_AUTO_EXPAND


# aws cloudformation create-stack --stack-name thesupersupersforg-3 --template-url https://thesupersupersf-org-cf-templates.s3.us-east-1.amazonaws.com/config/acm-certificate.yaml
