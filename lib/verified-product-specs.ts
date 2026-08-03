import type { ProductSpec } from './products'

export const VERIFIED_PRODUCT_SPECS: Record<string, ProductSpec[]> = {
  "hn-eb-004": [
    {
      "label": "Chamber",
      "value": "Optical-grade highly polished vacuum chamber"
    },
    {
      "label": "Evaporation Source",
      "value": "8 kW, 4-crucible, 270° deflection electron-beam gun"
    },
    {
      "label": "Vacuum System",
      "value": "Turbomolecular and titanium-pump system; ultimate pressure 3 × 10⁻⁵ Pa"
    },
    {
      "label": "Workpiece Fixture",
      "value": "Multi-axis planetary rotation fixture"
    },
    {
      "label": "Temperature Control",
      "value": "Segmented infrared precision heating"
    },
    {
      "label": "Monitoring",
      "value": "Online optical monitor with automatic multilayer endpoint detection"
    }
  ],
  "hn-eb-r-009": [
    {
      "label": "Chamber",
      "value": "φ450 mm optical-grade electropolished chamber"
    },
    {
      "label": "Evaporation Source",
      "value": "6 kW, 4-crucible compact E-type electron-beam gun"
    },
    {
      "label": "Vacuum System",
      "value": "Turbomolecular high-vacuum system"
    },
    {
      "label": "Temperature Control",
      "value": "Low-stress precision temperature control"
    },
    {
      "label": "Monitoring",
      "value": "High-precision optical extremum monitor"
    },
    {
      "label": "Control",
      "value": "Automatic crucible rotation with alternating multilayer evaporation cycles"
    }
  ],
  "hn-ma-001": [
    {
      "label": "Chamber",
      "value": "φ800–1800 mm stainless-steel chamber; vertical or horizontal"
    },
    {
      "label": "Arc Cathodes",
      "value": "4–20 arc cathodes with automatic ignition"
    },
    {
      "label": "Vacuum System",
      "value": "Rotary-vane backing pump and turbomolecular high-vacuum pump"
    },
    {
      "label": "Workpiece Fixture",
      "value": "High-capacity planetary rotation fixture"
    },
    {
      "label": "Power Supply",
      "value": "DC / pulsed bias supply and dedicated arc power supplies"
    },
    {
      "label": "Process Gas",
      "value": "Multi-channel precision MFC gas control"
    },
    {
      "label": "Control",
      "value": "Industrial touchscreen PLC with full-process safety interlocks"
    }
  ],
  "hn-ma-ms-003": [
    {
      "label": "Chamber",
      "value": "Partitioned composite vacuum chamber"
    },
    {
      "label": "Standard Sources",
      "value": "4 arc cathodes and 3 magnetron sputtering targets"
    },
    {
      "label": "Power Supply",
      "value": "Arc, DC/RF sputtering, and adjustable composite bias supplies"
    },
    {
      "label": "Vacuum System",
      "value": "Two-stage independent pumping system"
    },
    {
      "label": "Process Gas",
      "value": "Multi-channel precision MFC reactive-gas control"
    },
    {
      "label": "Workpiece Fixture",
      "value": "High-capacity planetary rotation fixture"
    },
    {
      "label": "Control",
      "value": "Segmented automatic process programs"
    }
  ],
  "hn-ma-ms-r-008": [
    {
      "label": "Chamber",
      "value": "φ500 mm partitioned composite chamber"
    },
    {
      "label": "Standard Sources",
      "value": "2 arc cathodes and 2 magnetron sputtering targets"
    },
    {
      "label": "Power Supply",
      "value": "Arc, DC/RF sputtering, and adjustable composite bias supplies"
    },
    {
      "label": "Sample Fixture",
      "value": "Multi-position fixture for parallel comparison samples"
    },
    {
      "label": "Process Gas",
      "value": "Multi-channel precision gas-mixing system"
    },
    {
      "label": "Control",
      "value": "Open process programming with automatic experiment-data storage and export"
    }
  ],
  "hn-ma-r-006": [
    {
      "label": "Chamber",
      "value": "φ300/450 mm compact vertical chamber"
    },
    {
      "label": "Arc Cathodes",
      "value": "2–4 compact arc cathodes"
    },
    {
      "label": "Bias System",
      "value": "Programmable segmented DC / pulsed bias"
    },
    {
      "label": "Temperature Control",
      "value": "Programmable stepped heating"
    },
    {
      "label": "Sample Fixture",
      "value": "Compact multi-position planetary holder for up to 20 comparison samples"
    },
    {
      "label": "Data System",
      "value": "Automatic recording of vacuum, power, gas flow, and temperature with Excel export"
    }
  ],
  "hn-ms-002": [
    {
      "label": "Chamber",
      "value": "Electropolished stainless-steel high-vacuum chamber"
    },
    {
      "label": "Targets",
      "value": "3–6 planar magnetron targets in 3, 4, or 8-inch formats"
    },
    {
      "label": "Power Supply",
      "value": "Pulsed DC sputtering and RF power supplies"
    },
    {
      "label": "Vacuum System",
      "value": "Turbomolecular high-vacuum system; ultimate pressure up to 5 × 10⁻⁴ Pa"
    },
    {
      "label": "Workpiece Fixture",
      "value": "High-capacity planetary fixture with adjustable substrate bias"
    },
    {
      "label": "Process Gas",
      "value": "Multi-channel precision MFC gas control"
    },
    {
      "label": "Control",
      "value": "Automatic process recipe storage"
    }
  ],
  "hn-ms-eb-005": [
    {
      "label": "Chamber",
      "value": "Partitioned ultra-high-vacuum composite chamber"
    },
    {
      "label": "Standard Sources",
      "value": "4 magnetron targets and one 4-crucible electron-beam gun"
    },
    {
      "label": "Power Supply",
      "value": "RF/DC sputtering, electron-beam control, and adjustable substrate bias supplies"
    },
    {
      "label": "Vacuum System",
      "value": "Independent pumping for each chamber zone"
    },
    {
      "label": "Monitoring",
      "value": "Quartz-crystal and optical dual-channel thickness monitoring"
    },
    {
      "label": "Workpiece Fixture",
      "value": "Multi-axis planetary rotation fixture"
    },
    {
      "label": "Temperature Control",
      "value": "High-precision segmented temperature control"
    }
  ],
  "hn-ms-eb-r-010": [
    {
      "label": "Chamber",
      "value": "φ600 mm partitioned research chamber"
    },
    {
      "label": "Standard Sources",
      "value": "3 DC/RF magnetron targets and one 4-crucible electron-beam gun"
    },
    {
      "label": "Vacuum System",
      "value": "Independent zoned pumping with dual vacuum valve sets"
    },
    {
      "label": "Control",
      "value": "Open process programming with local storage for more than 1,000 experiment recipes"
    },
    {
      "label": "Data System",
      "value": "Automatic process-data storage and Origin-compatible curve export"
    },
    {
      "label": "Integration",
      "value": "Reserved rapid vacuum sampling port for SEM/AFM integration"
    }
  ],
  "hn-ms-r-007": [
    {
      "label": "Chamber",
      "value": "φ400/500 mm chamber"
    },
    {
      "label": "Targets",
      "value": "2–4 planar magnetron targets with DC/RF power"
    },
    {
      "label": "Power Control",
      "value": "Independent target power adjustment with co-sputtering support"
    },
    {
      "label": "Temperature Control",
      "value": "Ambient to 800 °C; programmable 1–20 °C/min ramp rate"
    },
    {
      "label": "Thickness Monitoring",
      "value": "Real-time QCM thickness recording"
    },
    {
      "label": "Data System",
      "value": "Independent sample records with one-click experiment-curve export"
    }
  ],
}
