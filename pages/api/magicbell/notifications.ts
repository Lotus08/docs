import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.json({
    total: 3,
    total_pages: 1,
    per_page: 10,
    current_page: 1,
    notifications: [
      {
        id: '70161a53-8123-48da-8ae0-ad52a73203b2',
        title: "Deploying Rails apps on Amazon's Elastic Kubernetes Service",
        content:
          '<p style="opacity: 0.85; margin-top: 0.8em; margin-bottom: 0; font-size: 1.05em; line-height: 1.3;">Service providers like DigitalOcean, Google Cloud, and Amazon offer managed Kubernetes, and unless you are feeling adventurous, I highly recommend using them. At MagicBell, we use Amazon\'s Elastic Kubernetes Service (EKS) and find it quite performant (once you get past all the hoops of IAM etc).</p><p class="name" style="opacity: 0.5; margin-top: 6px; margin-bottom: 0.8em; text-transform: uppercase; font-size: 12px; line-height: 1.2em;">Hana Mohan (MagicBell) </p>',
        action_url: null,
        seen_at: new Date(),
        read_at: new Date(),
      },
      {
        id: '2b92bf16-5eb5-46a7-8145-153ecf924dad',
        title: "The project 'Refactor the code' is due soon",
        content:
          '<p style="line-height:1.3;">A friendly reminder that your project is due soon.</p> <p style="margin-top: 8px;line-height: 1.3;">You can submit all remaining documents electronically <i style="font-style: italic;">in just minutes</i>.</p>',
        action_url: null,
        seen_at: null,
        read_at: null,
      },
      {
        id: '2e2bf03e-f2a9-4751-be01-5ecfde902d12',
        title: 'Tom mentioned you in a coment',
        content:
          '<p style="line-height:1.3">Hi <b style="font-weight: bold;">@Dan</b>, could you please get me the files this client is requesting?</p><a style="font-size: 10px; padding: 12px; border-radius: 3px; background-color:#008b74;color:white !important; display: block;width: 100%; margin-top: 12px; text-align: center;text-transform:uppercase">View thread</a>',
        action_url: null,
        seen_at: null,
        read_at: null,
      },
    ],
    unseen_count: 2,
    unread_count: 2,
  });
}
