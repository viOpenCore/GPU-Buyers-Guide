(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{383:function(e,o,r){"use strict";r.r(o);var a=r(25),i=Object(a.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"boot-flags"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#boot-flags"}},[e._v("#")]),e._v(" Boot Flags")]),e._v(" "),r("p",[e._v("This little section here is a short explainer on some of the more commonly useful boot flags used for getting your GPU working. Do note, most of these boot-flags are from "),r("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen",target:"_blank",rel:"noopener noreferrer"}},[e._v("WhateverGreen"),r("OutboundLink")],1),e._v(" so refer to their "),r("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/blob/master/Manual/",target:"_blank",rel:"noopener noreferrer"}},[e._v("FAQ"),r("OutboundLink")],1),e._v(" for a complete list of boot flags. And for a list of all "),r("code",[e._v("shikigva boot arguments")]),e._v(", see "),r("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/blob/master/WhateverGreen/kern_shiki.hpp#L35-L74",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(" and DRM boot-flags can be found here: "),r("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.Chart.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("WhateverGreen's DRM chart"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"amd-boot-arguments"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#amd-boot-arguments"}},[e._v("#")]),e._v(" AMD Boot Arguments")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("shikigva=40")]),e._v(" + "),r("code",[e._v("shiki-id=Mac-7BA5B2D9E42DDD94")]),e._v(" "),r("ul",[r("li",[e._v("Swaps boardID with iMacPro1,1")]),e._v(" "),r("li",[e._v("Allows for Polaris, Vega and Navi GPUs to handle all types of rendering, useful for SMBIOS which expect an iGPU")]),e._v(" "),r("li",[e._v("See here for more info: "),r("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/drm.html#testing-hardware-acceleration-and-decoding",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fixing DRM"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[r("code",[e._v("radpg=15")]),e._v(" "),r("ul",[r("li",[e._v("Fixes initialization for HD 7730/7750/7770/R7 250/R7 250X")])])]),e._v(" "),r("li",[r("code",[e._v("-raddvi")]),e._v(" "),r("ul",[r("li",[e._v("Fixes DVI "),r("code",[e._v("connector-type")]),e._v(" for  290X, 370, etc")])])]),e._v(" "),r("li",[r("code",[e._v("-radvesa")]),e._v(" "),r("ul",[r("li",[e._v("Forces GPU into VESA mode(no GPU acceleration), useful for troubleshooting")]),e._v(" "),r("li",[e._v("Apple's built in version of this flag is "),r("code",[e._v("-amd_no_dgpu_accel")])])])]),e._v(" "),r("li",[r("code",[e._v("agdpmod=vit9696")]),e._v(" "),r("ul",[r("li",[e._v("Disables "),r("code",[e._v("board-id")]),e._v(" check, may be needed for when screen turns black after finishing booting")])])]),e._v(" "),r("li",[r("code",[e._v("agdpmod=pikera")]),e._v(" "),r("ul",[r("li",[e._v("Renames "),r("code",[e._v("board-id")]),e._v(" to "),r("code",[e._v("board-ix")]),e._v(" effectively disabling boardID checks, this is based off of Pike.R.A's work "),r("a",{attrs:{href:"https://pikeralpha.wordpress.com/2015/11/23/patching-applegraphicsdevicepolicy-kext/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("This is also required for all Navi GPUs due to the difference in framework with the x6000 drivers")])])])]),e._v(" "),r("h2",{attrs:{id:"nvidia-boot-arguments"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nvidia-boot-arguments"}},[e._v("#")]),e._v(" Nvidia Boot Arguments")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("nvda_drv=1")]),e._v(" "),r("ul",[r("li",[e._v("A boot flag that refuses to die, "),r("strong",[e._v("STOP USING IT")]),e._v(". Used for enabling Nvidia's WebDrivers pre-macOS Sierra but no longer works as it was moved to an NVRAM variable instead.\n"),r("ul",[r("li",[e._v("For Clover, use "),r("code",[e._v("NvidiaWeb")]),e._v(" under "),r("code",[e._v("System Parameters")]),e._v(" in your config.plist.")]),e._v(" "),r("li",[e._v("For OpenCore, use "),r("code",[e._v("NVRAM -> Add -> 7C436110-AB2A-4BBB-A880-FE41995C9F82 -> nvda_drv: <31>")]),e._v(" in your config.plist.")])])]),e._v(" "),r("li",[e._v("The WebDrivers in Sierra and High Sierra also support another boot argument called "),r("code",[e._v("nvda_drv_vrl=1")]),e._v(", this will actually do the same thing as "),r("code",[e._v("nvda_drv=1")]),e._v(" did in previous versions")])])]),e._v(" "),r("li",[r("code",[e._v("nv_disable=1")]),e._v(" "),r("ul",[r("li",[e._v("Forces GPU into VESA mode(no GPU acceleration), useful for troubleshooting and when having issues installing Nvidia's WebDrivers. This is a macOS flag so WEG is not needed.")])])]),e._v(" "),r("li",[r("code",[e._v("shikigva=40")]),e._v(" "),r("ul",[r("li",[e._v("Swaps boardID with iMac14,2")]),e._v(" "),r("li",[e._v("Useful for SMBIOS that don't expect a Nvidia GPU, however WhateverGreen should handleß patching by itself")])])]),e._v(" "),r("li",[r("code",[e._v("shikigva=1")]),e._v(" "),r("ul",[r("li",[e._v("Needed when you're wanting to use your iGPU's display out along with the dGPU, allows the iGPU to handle hardware decoding even when not using a connector-less framebuffer")])])]),e._v(" "),r("li",[r("code",[e._v("shikigva=4")]),e._v(" "),r("ul",[r("li",[e._v("Needed to support hardware accelerated video decoding on systems that are newer than Haswell, may need to be used with "),r("code",[e._v("shikigva=12")]),e._v(" to patch the needed processes")])])]),e._v(" "),r("li",[r("code",[e._v("agdpmod=vit9696")]),e._v(" "),r("ul",[r("li",[e._v("Disables "),r("code",[e._v("board-id")]),e._v(" check, may be needed for when screen turns black after finishing booting")])])]),e._v(" "),r("li",[r("code",[e._v("agdpmod=pikera")]),e._v(" "),r("ul",[r("li",[e._v("Swaps "),r("code",[e._v("board-id")]),e._v(" for "),r("code",[e._v("board-ix")]),e._v(", needed for disabling string comparison which is useful for non-iMac13,2/iMac14,2 SMBIOS")])])])]),e._v(" "),r("h2",{attrs:{id:"intel-boot-arguments"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#intel-boot-arguments"}},[e._v("#")]),e._v(" Intel Boot Arguments")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("-wegnoegpu")]),e._v(" "),r("ul",[r("li",[e._v("disables all GPUs excluding the iGPU, most relevant for users with Nvidia wanting to run Mojave+")])])]),e._v(" "),r("li",[r("code",[e._v("-igfxnohdmi")]),e._v(" "),r("ul",[r("li",[e._v("Disables DisplayPort to HDMI Audio Conversion")])])]),e._v(" "),r("li",[r("code",[e._v("-cdfon")]),e._v(" "),r("ul",[r("li",[e._v("Performs numerous patches required for enabling HDMI 2.0 support")])])]),e._v(" "),r("li",[r("code",[e._v("-igfxvesa")]),e._v(" "),r("ul",[r("li",[e._v("Forces GPU into VESA mode(no GPU acceleration), useful for troubleshooting")])])]),e._v(" "),r("li",[r("code",[e._v("igfxonln=1")]),e._v(" "),r("ul",[r("li",[e._v("Forces all displays online, useful for resolving screen wake issues in 10.15.4+ on Coffee and Comet Lake")])])]),e._v(" "),r("li",[r("code",[e._v("igfxfw=2")]),e._v(" "),r("ul",[r("li",[e._v("Enables loading Apple's GUC firmware for iGPUs, requires a 9th Gen chipset or newer(ie Z390)")]),e._v(" "),r("li",[e._v("See here for more info: "),r("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/drm.html#testing-hardware-acceleration-and-decoding",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fixing DRM"),r("OutboundLink")],1)])])])])])}),[],!1,null,null,null);o.default=i.exports}}]);