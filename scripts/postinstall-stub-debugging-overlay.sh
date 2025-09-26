#!/usr/bin/env bash
set -e
SPEC="node_modules/react-native/src/private/specs/components/DebuggingOverlayNativeComponent.js"
JS="node_modules/react-native/Libraries/Debugging/DebuggingOverlay/DebuggingOverlay.js"
if [ -f "$SPEC" ]; then
  cat > "$SPEC" <<'EOF'
/** DEV-ONLY STUB for codegen to avoid parsing issues. */
export default {};
EOF
fi
if [ -f "$JS" ]; then
  cat > "$JS" <<'EOF'
/** DEV-ONLY STUB: Disable DebuggingOverlay to avoid codegen/type issues. */
import * as React from 'react';
export default function DebuggingOverlay(){ return null; }
EOF
fi
