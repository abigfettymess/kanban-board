.PHONY: clean tsx

COMP=S
SRC=
FILE=
clean:
	rm -rf node_modules

tsx:
	rm -rf "$(SRC)/$(FILE)";
	touch "$(SRC)/$(FILE)";
	echo "import React from 'react';" >> "$(SRC)/$(FILE)";
	echo " " >> "$(SRC)/$(FILE)";
	echo "type Props = {};" >> "$(SRC)/$(FILE)";
	echo " " >> "$(SRC)/$(FILE)";
	echo "const $(COMP) = ({ }: Props) => (null);" >> "$(SRC)/$(FILE)";
	echo "export default $(COMP);" >> "$(SRC)/$(FILE)";