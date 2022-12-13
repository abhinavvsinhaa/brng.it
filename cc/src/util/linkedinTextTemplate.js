const linkedinTextTemplate = (author, caption) => {
  const body = {
    'author': `urn:li:person:${author}`,
    'lifecycleState': "PUBLISHED",
    'specificContent': {
      "com.linkedin.ugc.ShareContent": {
        'shareCommentary': {
          'text': String(caption),
        },
        'shareMediaCategory': "NONE",
      },
    },
    'visibility': {
      "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
    },
  };

  return body;
};

export default linkedinTextTemplate;
