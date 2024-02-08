# This file is generated by the BAML compiler.
# Do not edit this file directly.
# Instead, edit the BAML files and recompile.

# ruff: noqa: E501,F401
# flake8: noqa: E501,F401
# pylint: disable=unused-import,line-too-long
# fmt: off

from ..types.classes.cls_conversation import Conversation
from ..types.classes.cls_message import Message
from ..types.enums.enm_messagesender import MessageSender
from ..types.partial.classes.cls_conversation import PartialConversation
from ..types.partial.classes.cls_message import PartialMessage
from baml_core.stream import AsyncStream
from baml_lib._impl.functions import BaseBAMLFunction
from typing import AsyncIterator, Callable, Optional, Protocol, runtime_checkable


IMessageSimplifierOutput = Optional[int]

@runtime_checkable
class IMessageSimplifier(Protocol):
    """
    This is the interface for a function.

    Args:
        arg: Conversation

    Returns:
        Optional[int]
    """

    async def __call__(self, arg: Conversation, /) -> Optional[int]:
        ...

   

@runtime_checkable
class IMessageSimplifierStream(Protocol):
    """
    This is the interface for a stream function.

    Args:
        arg: Conversation

    Returns:
        AsyncStream[Optional[int], int]
    """

    def __call__(self, arg: Conversation, /) -> AsyncStream[Optional[int], int]:
        ...
class IBAMLMessageSimplifier(BaseBAMLFunction[Optional[int], int]):
    def __init__(self) -> None:
        super().__init__(
            "MessageSimplifier",
            IMessageSimplifier,
            ["v1"],
        )

    async def __call__(self, *args, **kwargs) -> Optional[int]:
        return await self.get_impl("v1").run(*args, **kwargs)
    
    def stream(self, *args, **kwargs) -> AsyncStream[Optional[int], int]:
        res = self.get_impl("v1").stream(*args, **kwargs)
        return res

BAMLMessageSimplifier = IBAMLMessageSimplifier()

__all__ = [ "BAMLMessageSimplifier" ]
