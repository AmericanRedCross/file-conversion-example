## Please see http://posm.io/ for up-to-date documentation.

------

## OpenMapKit (OMK)

https://github.com/americanredcross/openmapkit/wiki

### What OMK does well, what it doesn't do
- buildings and roads
- currently no creation of new features
  - features need to be pre-traced
- currently doesn't handle points
  - one of the next features to be added will be the ability to create new points
- dense areas are tough
  - decreased GPS accuracy
  - requires greater map literacy


### Creating the survey
- XLSForm syntax: basic
  - http://xlsform.org/
- XLSForm syntax: adding the OpenMapKit question type
  - https://github.com/AmericanRedCross/OpenMapKit/wiki/OpenDataKit-Forms-for-OpenMapKit
- form design: OSM tags, caveats, tips & tricks
  - if a key is part of the survey and a feature has a pre-exisiting value that is not included in the options list, then that value will not display in the question interface
  - use [taginfo](https://taginfo.openstreetmap.org) to research if keys/values are commonly used
  - don't include the same tags on two objects. [One feature, one osm element](http://wiki.openstreetmap.org/wiki/One_feature,_one_OSM_element)
  - when providing name=* for a highway or addr:street=* for a building
    - don't abbreviate (for example, use "Road" and "Lane" NOT "Rd" and "Ln")
    - use title case, capitalize the first letter of each word

### Setting up the app
- install ODK Collect and OpenMapKit on a phone
  - the next version of ODK when published to the Google Play Store should include all necessary functionality but for now you will need to use the APK files downloadable from the [wiki](https://github.com/AmericanRedCross/OpenMapKit/wiki/Downloads)
    - download directly to you phone or copy both files over from your computer
    - use the phone's file browser to open the files to install
    - you may need to install a file browser such as ES File Explorer File Manager
    - you may need to change the security settings on the phone to allow installation of apps from unknown sources
    - do not update ODK Collect
