// Generated from ASWB "Spotlight on Regulation" (2024).
// Source PDF: https://www.aswb.org/wp-content/uploads/2021/12/ASWB-Spotlight-on-Regulation.pdf
export type LicensureStats = {
  total_licensees?: number | null;
  per100k?: number | null;
  exemptions?: number | null;
  ce_hours?: string | null;
  renewal_period?: string | null;
  independent_practice?: "allowed" | "prohibited" | null;
  private_practice?: "allowed" | "prohibited" | null;
  supervision?: { Clinical?: string; Masters?: string; Bachelors?: string } | null;
  initial_fee?: string | null;
  renewal_fee?: string | null;
  exams_used?: ("Clinical" | "Masters" | "Bachelors")[] | null;
};
export type StateLicensure = { state: string; abbr: string; aswb: LicensureStats };
export const licensureByState: Record<string, StateLicensure> = {
  "alabama": {
    "state": "Alabama",
    "abbr": "AL",
    "aswb": {
      "total_licensees": 6947,
      "per100k": 138,
      "exemptions": 3,
      "ce_hours": "30",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours",
        "Masters": "3,000 hours \u00fc",
        "Bachelors": "2 years \u00fc"
      },
      "initial_fee": "$75",
      "renewal_fee": "$100",
      "exams_used": [
        "Clinical",
        "Masters",
        "Bachelors"
      ]
    }
  },
  "alaska": {
    "state": "Alaska",
    "abbr": "AK",
    "aswb": {
      "total_licensees": 156,
      "per100k": 156,
      "exemptions": 1,
      "ce_hours": "45",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours",
        "Masters": "Not required \u00fc",
        "Bachelors": "Not required \u00fc"
      },
      "initial_fee": "$325\u2013$425",
      "renewal_fee": "$225\u2013$325",
      "exams_used": [
        "Masters",
        "Bachelors"
      ]
    }
  },
  "arizona": {
    "state": "Arizona",
    "abbr": "AZ",
    "aswb": {
      "total_licensees": 109,
      "per100k": 109,
      "exemptions": 5,
      "ce_hours": "30",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,200 hours",
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$350",
      "renewal_fee": "$325",
      "exams_used": [
        "Masters",
        "Bachelors"
      ]
    }
  },
  "arkansas": {
    "state": "Arkansas",
    "abbr": "AR",
    "aswb": {
      "total_licensees": 4443,
      "per100k": 148,
      "exemptions": 3,
      "ce_hours": "30",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "4,000 hours",
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$100",
      "renewal_fee": "$80",
      "exams_used": [
        "Clinical",
        "Masters",
        "Bachelors"
      ]
    }
  },
  "california": {
    "state": "California",
    "abbr": "CA",
    "aswb": {
      "total_licensees": 59836,
      "per100k": 151,
      "exemptions": 8,
      "ce_hours": null,
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours"
      },
      "initial_fee": "$150\u2013$450",
      "renewal_fee": "$150\u2013$200",
      "exams_used": [
        "Clinical"
      ]
    }
  },
  "colorado": {
    "state": "Colorado",
    "abbr": "CO",
    "aswb": {
      "total_licensees": 201,
      "per100k": 201,
      "exemptions": 8,
      "ce_hours": null,
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,360 hours",
        "Masters": "Not required \u00fc"
      },
      "initial_fee": "$70\u2013$130",
      "renewal_fee": "varies",
      "exams_used": []
    }
  },
  "connecticut": {
    "state": "Connecticut",
    "abbr": "CT",
    "aswb": {
      "total_licensees": 15156,
      "per100k": 420,
      "exemptions": 4,
      "ce_hours": "15",
      "renewal_period": "1 year",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours",
        "Masters": "Not required"
      },
      "initial_fee": "$125\u2013$200",
      "renewal_fee": "$125\u2013$200",
      "exams_used": [
        "Clinical"
      ]
    }
  },
  "delaware": {
    "state": "Delaware",
    "abbr": "DE",
    "aswb": {
      "total_licensees": 98,
      "per100k": 98,
      "exemptions": 1,
      "ce_hours": "20\u201340",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,200 hours",
        "Masters": "Not required",
        "Bachelors": "Not required \u00fc \u00fc"
      },
      "initial_fee": "$205",
      "renewal_fee": "Licensees",
      "exams_used": [
        "Masters",
        "Bachelors"
      ]
    }
  },
  "florida": {
    "state": "Florida",
    "abbr": "FL",
    "aswb": {
      "total_licensees": 105,
      "per100k": 105,
      "exemptions": 6,
      "ce_hours": "30",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "1,500 hours",
        "Masters": "3,000 hours"
      },
      "initial_fee": "$175\u2013$200",
      "renewal_fee": "$120\u2013$155",
      "exams_used": []
    }
  },
  "georgia": {
    "state": "Georgia",
    "abbr": "GA",
    "aswb": {
      "total_licensees": 8460,
      "per100k": 79,
      "exemptions": 11,
      "ce_hours": null,
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours",
        "Masters": "2 years \u00fc"
      },
      "initial_fee": "$100",
      "renewal_fee": "$100",
      "exams_used": [
        "Clinical",
        "Masters"
      ]
    }
  },
  "hawaii": {
    "state": "Hawaii",
    "abbr": "HI",
    "aswb": {
      "total_licensees": 2593,
      "per100k": 178,
      "exemptions": 5,
      "ce_hours": "45",
      "renewal_period": "3 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours",
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$281\u2013$478",
      "renewal_fee": "$177\u2013$270",
      "exams_used": [
        "Clinical",
        "Masters",
        "Bachelors"
      ]
    }
  },
  "idaho": {
    "state": "Idaho",
    "abbr": "ID",
    "aswb": {
      "total_licensees": 277,
      "per100k": 277,
      "exemptions": 1,
      "ce_hours": "20",
      "renewal_period": "1 year",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours",
        "Masters": "3,000 hours \u00fc",
        "Bachelors": "3,000 hours \u00fc"
      },
      "initial_fee": "$70",
      "renewal_fee": "$80\u2013$90",
      "exams_used": [
        "Masters",
        "Bachelors"
      ]
    }
  },
  "illinois": {
    "state": "Illinois",
    "abbr": "IL",
    "aswb": {
      "total_licensees": 23095,
      "per100k": 180,
      "exemptions": 4,
      "ce_hours": "30",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours"
      },
      "initial_fee": "$50",
      "renewal_fee": "$30",
      "exams_used": [
        "Clinical"
      ]
    }
  },
  "indiana": {
    "state": "Indiana",
    "abbr": "IN",
    "aswb": {
      "total_licensees": 112,
      "per100k": 112,
      "exemptions": null,
      "ce_hours": "40",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "2 years",
        "Masters": "Not required",
        "Bachelors": "Not required \u00fc \u00fc"
      },
      "initial_fee": "$50",
      "renewal_fee": "$50",
      "exams_used": [
        "Masters",
        "Bachelors"
      ]
    }
  },
  "iowa": {
    "state": "Iowa",
    "abbr": "IA",
    "aswb": {
      "total_licensees": 5677,
      "per100k": 178,
      "exemptions": 1,
      "ce_hours": "27",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "4,000hours",
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$120",
      "renewal_fee": "$72\u2013$144",
      "exams_used": [
        "Clinical",
        "Masters",
        "Bachelors"
      ]
    }
  },
  "kansas": {
    "state": "Kansas",
    "abbr": "KS",
    "aswb": {
      "total_licensees": 288,
      "per100k": 288,
      "exemptions": 1,
      "ce_hours": "40",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours",
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$150\u2013$200",
      "renewal_fee": "$50\u2013$100",
      "exams_used": [
        "Masters",
        "Bachelors"
      ]
    }
  },
  "kentucky": {
    "state": "Kentucky",
    "abbr": "KY",
    "aswb": {
      "total_licensees": 6806,
      "per100k": 151,
      "exemptions": 5,
      "ce_hours": "15\u201330",
      "renewal_period": "3 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,600 hours",
        "Masters": "2 years \u00fc",
        "Bachelors": "Not required"
      },
      "initial_fee": "$100\u2013$225",
      "renewal_fee": "$75\u2013$200",
      "exams_used": [
        "Clinical",
        "Masters",
        "Bachelors"
      ]
    }
  },
  "louisiana": {
    "state": "Louisiana",
    "abbr": "LA",
    "aswb": {
      "total_licensees": 167,
      "per100k": 167,
      "exemptions": 7,
      "ce_hours": null,
      "renewal_period": "1 year",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Masters": "\u00fc \u00fc",
        "Bachelors": "Not required"
      },
      "initial_fee": "$50\u2013$100",
      "renewal_fee": "$25\u2013$100",
      "exams_used": [
        "Masters"
      ]
    }
  },
  "maine": {
    "state": "Maine",
    "abbr": "ME",
    "aswb": {
      "total_licensees": 7546,
      "per100k": 554,
      "exemptions": 1,
      "ce_hours": "25",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,200 hours",
        "Masters": "Not required",
        "Bachelors": "2 years \u00fc"
      },
      "initial_fee": "$91",
      "renewal_fee": "$70",
      "exams_used": [
        "Clinical",
        "Masters",
        "Bachelors"
      ]
    }
  },
  "maryland": {
    "state": "Maryland",
    "abbr": "MD",
    "aswb": {
      "total_licensees": 14169,
      "per100k": null,
      "exemptions": 3,
      "ce_hours": "30\u201340",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$175",
      "renewal_fee": "$100\u2013$301",
      "exams_used": [
        "Clinical",
        "Masters",
        "Bachelors"
      ]
    }
  },
  "massachusetts": {
    "state": "Massachusetts",
    "abbr": "MA",
    "aswb": {
      "total_licensees": 454,
      "per100k": null,
      "exemptions": 4,
      "ce_hours": "10\u201330",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,500 hours",
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$215\u2013$255",
      "renewal_fee": "$42\u2013$82",
      "exams_used": [
        "Masters",
        "Bachelors"
      ]
    }
  },
  "michigan": {
    "state": "Michigan",
    "abbr": "MI",
    "aswb": {
      "total_licensees": 32086,
      "per100k": 318,
      "exemptions": 1,
      "ce_hours": "45",
      "renewal_period": "3 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "4,000hours",
        "Bachelors": "4,000hours \u00fc"
      },
      "initial_fee": "$42.40",
      "renewal_fee": "\u2013",
      "exams_used": [
        "Clinical",
        "Bachelors"
      ]
    }
  },
  "minnesota": {
    "state": "Minnesota",
    "abbr": "MN",
    "aswb": {
      "total_licensees": 290,
      "per100k": null,
      "exemptions": 3,
      "ce_hours": "40",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {},
      "initial_fee": "\u2013",
      "renewal_fee": "$110\u2013$325",
      "exams_used": []
    }
  },
  "mississippi": {
    "state": "Mississippi",
    "abbr": "MS",
    "aswb": {
      "total_licensees": 4074,
      "per100k": 138,
      "exemptions": 1,
      "ce_hours": "40",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "2 years",
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$95\u2013$125",
      "renewal_fee": "$70\u2013$100",
      "exams_used": [
        "Clinical",
        "Masters",
        "Bachelors"
      ]
    }
  },
  "missouri": {
    "state": "Missouri",
    "abbr": "MO",
    "aswb": {
      "total_licensees": 160,
      "per100k": null,
      "exemptions": 1,
      "ce_hours": "30",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Masters": "Not required"
      },
      "initial_fee": "$70",
      "renewal_fee": "$65",
      "exams_used": [
        "Masters",
        "Bachelors"
      ]
    }
  },
  "montana": {
    "state": "Montana",
    "abbr": "MT",
    "aswb": {
      "total_licensees": 2013,
      "per100k": 186,
      "exemptions": 1,
      "ce_hours": "20",
      "renewal_period": "1 year",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Masters": "\u00fc \u00fc"
      },
      "initial_fee": "$175",
      "renewal_fee": "$175",
      "exams_used": [
        "Clinical",
        "Masters",
        "Bachelors"
      ]
    }
  },
  "nebraska": {
    "state": "Nebraska",
    "abbr": "NE",
    "aswb": {
      "total_licensees": 438,
      "per100k": 438,
      "exemptions": 6,
      "ce_hours": "32",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Bachelors": "Not required",
        "Masters": "Not required \u00fc"
      },
      "initial_fee": "$50\u2013$155",
      "renewal_fee": "$50\u2013$155",
      "exams_used": [
        "Masters"
      ]
    }
  },
  "nevada": {
    "state": "Nevada",
    "abbr": "NV",
    "aswb": {
      "total_licensees": 4920,
      "per100k": null,
      "exemptions": 4,
      "ce_hours": "30\u201336",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours",
        "Bachelors": "Not required",
        "Masters": "Advanced 3,000 hours \u00fc"
      },
      "initial_fee": "$140",
      "renewal_fee": "$150",
      "exams_used": [
        "Clinical",
        "Masters",
        "Bachelors"
      ]
    }
  },
  "new-hampshire": {
    "state": "New Hampshire",
    "abbr": "NH",
    "aswb": {
      "total_licensees": 1815,
      "per100k": 132,
      "exemptions": 4,
      "ce_hours": "40",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours"
      },
      "initial_fee": "$338",
      "renewal_fee": "$270",
      "exams_used": [
        "Clinical",
        "Bachelors"
      ]
    }
  },
  "new-jersey": {
    "state": "New Jersey",
    "abbr": "NJ",
    "aswb": {
      "total_licensees": 277,
      "per100k": 277,
      "exemptions": 6,
      "ce_hours": "20\u201340",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours",
        "Masters": "Not required",
        "Bachelors": "Not required \u00fc"
      },
      "initial_fee": "$145\u2013$235",
      "renewal_fee": "$70\u2013$160",
      "exams_used": [
        "Masters"
      ]
    }
  },
  "new-mexico": {
    "state": "New Mexico",
    "abbr": "NM",
    "aswb": {
      "total_licensees": 5199,
      "per100k": null,
      "exemptions": 1,
      "ce_hours": "30",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,600 hours",
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$75\u2013$125",
      "renewal_fee": "$100\u2013$200",
      "exams_used": [
        "Clinical",
        "Masters",
        "Bachelors"
      ]
    }
  },
  "new-york": {
    "state": "New York",
    "abbr": "NY",
    "aswb": {
      "total_licensees": 344,
      "per100k": 344,
      "exemptions": 9,
      "ce_hours": null,
      "renewal_period": "3 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "2,000 hours",
        "Masters": "Not required"
      },
      "initial_fee": "$294",
      "renewal_fee": "$224",
      "exams_used": [
        "Masters"
      ]
    }
  },
  "north-carolina": {
    "state": "North Carolina",
    "abbr": "NC",
    "aswb": {
      "total_licensees": 167,
      "per100k": null,
      "exemptions": 2,
      "ce_hours": "40",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours",
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$115",
      "renewal_fee": "$70\u2013$150",
      "exams_used": [
        "Masters",
        "Bachelors"
      ]
    }
  },
  "north-dakota": {
    "state": "North Dakota",
    "abbr": "ND",
    "aswb": {
      "total_licensees": 2971,
      "per100k": 381,
      "exemptions": 3,
      "ce_hours": "30",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours",
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$100",
      "renewal_fee": "$75",
      "exams_used": [
        "Clinical",
        "Masters",
        "Bachelors"
      ]
    }
  },
  "ohio": {
    "state": "Ohio",
    "abbr": "OH",
    "aswb": {
      "total_licensees": 253,
      "per100k": null,
      "exemptions": 6,
      "ce_hours": "30",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$60\u2013$100",
      "renewal_fee": "\u2013",
      "exams_used": [
        "Masters",
        "Bachelors"
      ]
    }
  },
  "oklahoma": {
    "state": "Oklahoma",
    "abbr": "OK",
    "aswb": {
      "total_licensees": 3434,
      "per100k": null,
      "exemptions": 1,
      "ce_hours": "16",
      "renewal_period": "1 year",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "4,000 hours",
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$150",
      "renewal_fee": "$100",
      "exams_used": [
        "Clinical",
        "Masters",
        "Bachelors"
      ]
    }
  },
  "oregon": {
    "state": "Oregon",
    "abbr": "OR",
    "aswb": {
      "total_licensees": 166,
      "per100k": 166,
      "exemptions": 1,
      "ce_hours": "20\u201340",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,500 hours",
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$150\u2013$460",
      "renewal_fee": "$66\u2013$286",
      "exams_used": [
        "Masters",
        "Bachelors"
      ]
    }
  },
  "pennsylvania": {
    "state": "Pennsylvania",
    "abbr": "PA",
    "aswb": {
      "total_licensees": 20515,
      "per100k": 158,
      "exemptions": 1,
      "ce_hours": "30",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours",
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$25\u2013$90",
      "renewal_fee": "$95",
      "exams_used": [
        "Clinical",
        "Masters",
        "Bachelors"
      ]
    }
  },
  "rhode-island": {
    "state": "Rhode Island",
    "abbr": "RI",
    "aswb": {
      "total_licensees": 398,
      "per100k": 398,
      "exemptions": 1,
      "ce_hours": "30",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours"
      },
      "initial_fee": "$70",
      "renewal_fee": "$70",
      "exams_used": []
    }
  },
  "south-carolina": {
    "state": "South Carolina",
    "abbr": "SC",
    "aswb": {
      "total_licensees": 151,
      "per100k": null,
      "exemptions": 3,
      "ce_hours": "40",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$45",
      "renewal_fee": "$90",
      "exams_used": [
        "Masters",
        "Bachelors"
      ]
    }
  },
  "south-dakota": {
    "state": "South Dakota",
    "abbr": "SD",
    "aswb": {
      "total_licensees": 1444,
      "per100k": null,
      "exemptions": 1,
      "ce_hours": "30",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "2 years",
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$90\u2013$210",
      "renewal_fee": "$90\u2013$210",
      "exams_used": [
        "Clinical",
        "Masters",
        "Bachelors"
      ]
    }
  },
  "tennessee": {
    "state": "Tennessee",
    "abbr": "TN",
    "aswb": {
      "total_licensees": 103,
      "per100k": null,
      "exemptions": 1,
      "ce_hours": "9\u201315",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$110\u2013$235",
      "renewal_fee": "$45\u2013$95",
      "exams_used": [
        "Masters",
        "Bachelors"
      ]
    }
  },
  "texas": {
    "state": "Texas",
    "abbr": "TX",
    "aswb": {
      "total_licensees": 33474,
      "per100k": null,
      "exemptions": 2,
      "ce_hours": "30",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Bachelors": "3,000hours \u00fc"
      },
      "initial_fee": "$109\u2013$129",
      "renewal_fee": "$106\u2013$163",
      "exams_used": [
        "Clinical",
        "Masters",
        "Bachelors"
      ]
    }
  },
  "utah": {
    "state": "Utah",
    "abbr": "UT",
    "aswb": {
      "total_licensees": 360,
      "per100k": null,
      "exemptions": 7,
      "ce_hours": null,
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours",
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$85\u2013$180",
      "renewal_fee": "$78\u2013$93",
      "exams_used": [
        "Bachelors"
      ]
    }
  },
  "vermont": {
    "state": "Vermont",
    "abbr": "VT",
    "aswb": {
      "total_licensees": 1848,
      "per100k": 287,
      "exemptions": 6,
      "ce_hours": "10\u201320",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours",
        "Masters": "Not required"
      },
      "initial_fee": "$100",
      "renewal_fee": "$150",
      "exams_used": [
        "Clinical",
        "Masters"
      ]
    }
  },
  "virginia": {
    "state": "Virginia",
    "abbr": "VA",
    "aswb": {
      "total_licensees": 7195,
      "per100k": 83,
      "exemptions": 4,
      "ce_hours": "15\u201330",
      "renewal_period": "1 year",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours",
        "Masters": "Not required",
        "Bachelors": "Not required \u00fc"
      },
      "initial_fee": "$100\u2013$165",
      "renewal_fee": "$25\u2013$90",
      "exams_used": [
        "Clinical",
        "Masters",
        "Bachelors"
      ]
    }
  },
  "washington": {
    "state": "Washington",
    "abbr": "WA",
    "aswb": {
      "total_licensees": 154,
      "per100k": 154,
      "exemptions": 2,
      "ce_hours": "18\u201336",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "4,000 hours",
        "Masters": "Not required \u00fc"
      },
      "initial_fee": "$186",
      "renewal_fee": "$116",
      "exams_used": []
    }
  },
  "west-virginia": {
    "state": "West Virginia",
    "abbr": "WV",
    "aswb": {
      "total_licensees": 4002,
      "per100k": null,
      "exemptions": 2,
      "ce_hours": "20\u201330",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "4,000hours",
        "Masters": "Not required",
        "Bachelors": "Not required"
      },
      "initial_fee": "$90",
      "renewal_fee": "$85",
      "exams_used": [
        "Clinical",
        "Masters",
        "Bachelors"
      ]
    }
  },
  "wisconsin": {
    "state": "Wisconsin",
    "abbr": "WI",
    "aswb": {
      "total_licensees": 250,
      "per100k": null,
      "exemptions": 1,
      "ce_hours": "30",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000hours",
        "Bachelors": "Not required"
      },
      "initial_fee": "$152",
      "renewal_fee": "$62",
      "exams_used": [
        "Masters",
        "Bachelors"
      ]
    }
  },
  "wyoming": {
    "state": "Wyoming",
    "abbr": "WY",
    "aswb": {
      "total_licensees": 1045,
      "per100k": 181,
      "exemptions": 3,
      "ce_hours": "45",
      "renewal_period": "2 years",
      "independent_practice": "prohibited",
      "private_practice": "prohibited",
      "supervision": {
        "Clinical": "3,000 hours",
        "Bachelors": "Not required"
      },
      "initial_fee": "$193\u2013$393",
      "renewal_fee": "$125",
      "exams_used": [
        "Clinical",
        "Bachelors"
      ]
    }
  }
};
