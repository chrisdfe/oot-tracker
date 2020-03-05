import React, { ReactNode } from "react";

import { ThemeProvider } from "styled-components";

import hexToRGB from "../utils/hexToRGB";

interface Props {
  children: ReactNode;
}

type RegionTheme = {
  background: {
    color: {
      primary: string;
      secondary: string;
    };
  };
  text: {
    color: {
      primary: string;
    };
  };
  border: {
    color: {
      primary: string;
      secondary: string;
    };
  };
};

type RegionThemeMap = {
  [regionName: string]: RegionTheme;
};

type ValueMap = {
  [name: string]: string;
};

export type AppTheme =
  | RegionTheme
  | {
      rawColors: ValueMap;
      rawFonts: ValueMap;
      fonts: ValueMap;
      regions: RegionThemeMap;
    };

const rawColors: ValueMap = {
  white: "#fff",
  caper: "#e1e5da",
  killarney: "#2f5e42",
  kellyGreen: "#22d07a"
};

const rawFonts: ValueMap = {
  merriweather: "Merriweather, sans-serif",
  openSans: "'Open Sans', sans-serif"
};

const defaultTheme: RegionTheme = {
  background: {
    color: {
      primary: rawColors.white,
      secondary: rawColors.white
    }
  },
  text: {
    color: {
      primary: "#2A3854"
    }
  },
  border: {
    color: {
      primary: "#2A3854",
      secondary: hexToRGB("#2A3854", 0.2)
    }
  }
};

const zoraTheme: RegionTheme = {
  background: {
    color: {
      primary: "#d7e5ed",
      secondary: "#08466e"
    }
  },
  text: {
    color: {
      primary: "#08466e"
    }
  },
  border: {
    color: {
      primary: "#08466e",
      secondary: rawColors.white
    }
  }
};

const kokiriTheme: RegionTheme = {
  background: {
    color: {
      primary: rawColors.caper,
      secondary: rawColors.white
    }
  },
  text: {
    color: {
      primary: rawColors.killarney
    }
  },
  border: {
    color: {
      primary: rawColors.killarney,
      secondary: rawColors.white
    }
  }
};

const goronTheme: RegionTheme = {
  background: {
    color: {
      primary: "#e5cccc",
      secondary: "#c13540"
    }
  },
  text: {
    color: {
      primary: "#c13540"
    }
  },
  border: {
    color: {
      primary: "#c13540",
      secondary: rawColors.white
    }
  }
};

const shadowTheme: RegionTheme = {
  background: {
    color: {
      primary: "#dddce5",
      secondary: rawColors.white
    }
  },
  text: {
    color: {
      primary: "#635566"
    }
  },
  border: {
    color: {
      primary: "#635566",
      secondary: rawColors.white
    }
  }
};

const gerudoTheme: RegionTheme = {
  background: {
    color: {
      primary: "#FBDEC6",
      secondary: rawColors.white
    }
  },
  text: {
    color: {
      primary: "#E5555E"
    }
  },
  border: {
    color: {
      primary: "#E5555E",
      secondary: rawColors.white
    }
  }
};

const theme: AppTheme = {
  rawColors,
  rawFonts,

  fonts: {
    heading: rawFonts.merriweather,
    body: rawFonts.openSans
  },

  ...defaultTheme,

  regions: {
    default: defaultTheme,
    zora: zoraTheme,
    kokiri: kokiriTheme,
    goron: goronTheme,
    shadow: shadowTheme,
    gerudo: gerudoTheme
  }
};

const Theme = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
