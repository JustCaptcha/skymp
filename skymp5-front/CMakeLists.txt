project(skymp5-front)

include(${CMAKE_SOURCE_DIR}/cmake/npm.cmake)

npm_execute_command(
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}
  COMMAND install
)

file(GLOB_RECURSE sources ${CMAKE_CURRENT_LIST_DIR}/src/*)

set(FRONT_OUTPUT_PATH "../build/dist/server/data/ui")
string(REPLACE "\\" "\\\\" FRONT_OUTPUT_PATH ${FRONT_OUTPUT_PATH})
set(FRONT_CFG_PATH "${CMAKE_CURRENT_LIST_DIR}/config.js")
file(WRITE ${FRONT_CFG_PATH} "")
file(APPEND ${FRONT_CFG_PATH} "module.exports = {\n")
file(APPEND ${FRONT_CFG_PATH} "  outputPath:\n")
file(APPEND ${FRONT_CFG_PATH} "    '${FRONT_OUTPUT_PATH}',\n")
file(APPEND ${FRONT_CFG_PATH} "};\n")

add_custom_target(skymp5-front ALL
  WORKING_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}
  SOURCES ${sources}
  COMMAND npm run build
)
